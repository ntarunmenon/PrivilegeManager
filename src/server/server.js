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
        expiresIn: 120,
        subject: username
    });
    res.status(200).json({
        idToken: jwtBearerToken,
        expiresIn: 120
    });
});
server.use('/api', router);
server.listen(3004, function () {
    console.log('JSON Server is running');
});
