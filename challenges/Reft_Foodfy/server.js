const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
const routes = require('./routes');
const methodOverride = require('method-override');
// const bodyParser = require('body-parser'); 


server.use(express.urlencoded({ extended: true }));  // Responsável pelo funcionamento do req.body
server.use(express.static('public')); // Dizendo ao express a pasta que contem img, js e css
server.use(methodOverride('_method')); //Configurando o methodOverride aparentemente
server.use(routes); // Usa o arquivo de rotas
server.set('view engine', 'njk');


nunjucks.configure('views', {
    autoescape: true,
    express: server,
    noCache: true
});

server.listen(5000, function() {
    console.log('Server is running.');
});

// server.use(function(req, res) {
//     res.status(404).render("client/not-found");
// });