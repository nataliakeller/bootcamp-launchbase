const fs = require('fs'); // File System
const { create } = require('browser-sync');
const dataRecipes = require('../data.json');
const fetch = require("node-fetch");

exports.index = function(req, res) {
    res.render('admin/index', { recipes: dataRecipes.recipes }); // adicionar dados
};

exports.create = function(req, res) {
    res.render('admin/create');
};

exports.post = function(req, res) {
    const keys = Object.keys(req.body); // Validação

    for (key of keys) {
        
        if (req.body[key] == '') { // Se algum campo do body está vazio...
            return res.send('Please enter the required fields.');
        };
    };
    let { image, title, ingredients, steps, information } = req.body;
    const author = "Cesare Pavanese";
    
    dataRecipes.recipes.push({
    image,
    title,
    author,
    ingredients,
    steps,
    information
    });
    
    fs.writeFile('data.json', JSON.stringify(dataRecipes, null, 2), function(err) { // escrevendo os dados no arquivo data.json

        if (err) return res.send("writeFile error!");

        return res.redirect('recipes');
    });
};

exports.show = function(req, res) {
    const recipeIndex = req.params.index;

    if (!dataRecipes.recipes[recipeIndex]) {
        return res.send('Recipe Not Found');
    };
    return res.render('admin/details', {index: recipeIndex, recipe: dataRecipes.recipes[recipeIndex], ingredients: dataRecipes.recipes[recipeIndex].ingredients, steps: dataRecipes.recipes[recipeIndex].preparation})
};

exports.edit = function(req, res) {
    res.render('admin/edit')
};

// exports.put = function(req, res) {

// };

// exports.delete = function(req, res) {

// };