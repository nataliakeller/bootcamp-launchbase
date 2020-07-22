const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const routes = require('./routes');

server.use(express.urlencoded({ extended: true })); // Responsável pelo funcionamento do req.body
server.use(routes);
server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
});

server.listen(5000, function() {
    console.log('Server is running.');
});


// server.use(function(req, res) {
//     res.status(404).render("not-found");
//   });