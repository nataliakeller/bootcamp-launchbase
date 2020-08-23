const fs = require('fs'); // File System
const { create } = require('browser-sync');
const dataRecipes = require('../data.json');

exports.index = function(req, res) {
    res.render('admin/index', { recipes: dataRecipes.recipes }); // adicionar dados
};

exports.create = function(req, res) {
    res.render('admin/create');
};

// exports.post = function(req, res) {
    
// };

exports.show = function(req, res) {
    const recipeIndex = req.params.index;

    if (!dataRecipes.recipes[recipeIndex]) {
        return res.send('Recipe Not Found');
    };
    return res.render('admin/details', {index: recipeIndex, recipe: dataRecipes.recipes[recipeIndex], ingredients: dataRecipes.recipes[recipeIndex].ingredients, steps: dataRecipes.recipes[recipeIndex].preparation})
};

// exports.edit = function(req, res) {
//     res.render('recipes/edit')
// };

// exports.put = function(req, res) {

// };

// exports.delete = function(req, res) {

// };