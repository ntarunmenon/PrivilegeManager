"use strict";
exports.__esModule = true;
var jwt = require("jsonwebtoken");
var jsonServer = require('json-server');
var server = jsonServer.create();
var path = require('path');
var router = jsonServer.router(path.join('src/server', 'db.json'));
var middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
// Add custom routes before JSON Server router
console.log('outside get');
server.post('/api/login', function (req, res) {
    var username = 'username';
    // password = req.body.password;
    console.log('inside get');
    var jwtBearerToken = jwt.sign({}, 'secret123', {
        algorithm: 'HS256',
        expiresIn: 300,
        subject: JSON.stringify({
            username: 'john',
            roles: ['officer']
        })
    });
    res.status(200).json({
        idToken: jwtBearerToken,
        expiresIn: 30,
        user: {
            username: 'john',
            roles: ['officer']
        }
    });
});
server.use(function (req, res, next) {
    console.log(req.path);
    if (req.path !== '/api/login') {
        var authHeader = req.get('X-Auth-Token');
        console.log(authHeader);
        if (authHeader) {
            try {
                var decoded = jwt.verify(authHeader, 'secret123');
                console.log(decoded);
            }
            catch (e) {
                res.status(401).send();
            }
        }
        else {
            res.status(401).send();
        }
    }
    // Continue to JSON Server router
    next();
});
server.use('/api', router);
server.listen(3004, function () {
    console.log('JSON Server is running');
});
