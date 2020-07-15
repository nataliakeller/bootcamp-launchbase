const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));


server.set('view engine', 'njk');
nunjucks.configure('views', {
    express: server
});

server.listen(5000, function() {
    console.log('Server is running.');
});

server.get('/', function(req, res) {
    return res.render('index');
});

server.get('/recipes/:index', function (req, res) {
    const recipes = require('./public/js/data'); // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;

    if (!recipes[recipeIndex]) {
        return res.send('Recipe Not Found')
    }
    return res.render('recipes', {recipe: recipes[recipeIndex], ingredients: recipes[recipeIndex].ingredients, steps: recipes[recipeIndex].preparation})
});

server.get('/recipes', function(req, res) {
    return res.render('recipes');
});

server.get('/about', function(req, res) {
    return res.render('about');
});