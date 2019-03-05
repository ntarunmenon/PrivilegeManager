import * as jwt from 'jsonwebtoken';
declare var require: any
const jsonServer = require('json-server');
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join('src/server', 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)
// Add custom routes before JSON Server router
console.log('outside get');
server.post('/api/login', (req, res) => {
  const username = 'username'
  // password = req.body.password;
  console.log('inside get');

  const jwtBearerToken = jwt.sign({}, 'secret123', {
      algorithm: 'HS256',
      expiresIn: 300,
      subject: JSON.stringify({
        username: 'john',
        roles : ['officer'] 
      })
  })
  res.status(200).json({
        username: 'john',
        roles : ['officer'],
        idToken: jwtBearerToken
      }
    );
})

server.use((req, res, next) => {
  console.log(req.path);
  if (req.path !== '/api/login') {
     const authHeader = req.get('X-Auth-Token');
     console.log(authHeader)
     if (authHeader) {
        try {
          const decoded = jwt.verify(authHeader,'secret123');
          console.log(decoded);
          next();
        } catch (e) {
          res.status(401).send();
        }
     } else {
      res.status(401).send();
     }
  }
})

server.use('/api', router);
server.listen(3004, () => {
  console.log('JSON Server is running')
})