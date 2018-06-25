const http = require('http');
const app = require('./app');

http.createServer(app).listen(7000, '127.0.0.1');
