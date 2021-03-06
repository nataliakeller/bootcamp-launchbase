const express = require('express');
const routes = express.Router();
const dataRecipes = require('./data.json'); // receitas carregadas do data.json
const oldDataRecipes = require('./public/js/data.js');


const recipes = require('./controllers/recipes');
const nunjucks = require('nunjucks');


// client
routes.get('/', function (req, res) {
    res.render('client/index', { recipes: oldDataRecipes });
});

routes.get('/about', function(req, res) {
    return res.render('client/about');
});

//showing recipes according to index
routes.get('/recipes/:index', function (req, res) {
    const recipeIndex = req.params.index;

    if (!oldDataRecipes[recipeIndex]) {
        return res.send('Recipe Not Found')
    }
    return res.render('client/details', { recipe: oldDataRecipes[recipeIndex], ingredients: oldDataRecipes[recipeIndex].ingredients, steps: oldDataRecipes[recipeIndex].steps})
});

//admin

routes.get('/admin/recipes/', recipes.index); // Mostrar a lista de receitas

routes.get('/admin/recipes/create', recipes.create); // Mostrar formulário de nova receita

routes.get('/admin/recipes/:index', recipes.show); // Exibir detalhes de uma receita. Alterado o :id para :index.

routes.get('/admin/recipes/:id/edit', recipes.edit); // Mostrar formulário de edição de receita

routes.post('/admin/recipes/', recipes.post); // Cadastrar nova receita

routes.put('/admin/recipes/', recipes.put); // Editar uma receita

routes.delete('/admin/recipes', recipes.delete); // Deletar uma receita


module.exports = routes;
