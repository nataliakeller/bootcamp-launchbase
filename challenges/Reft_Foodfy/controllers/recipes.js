const fs = require('fs'); // File System
const { create } = require('browser-sync');
const dataRecipes = require('../data.json');
const fetch = require("node-fetch");

// index
exports.index = function(req, res) {
    res.render('admin/index', { recipes: dataRecipes.recipes }); // adicionar dados
};

//create
exports.create = function(req, res) {
    res.render('admin/create');
};

//post
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

//show
exports.show = function(req, res) {
    const recipeIndex = req.params.index;

    if (!dataRecipes.recipes[recipeIndex]) {
        return res.send('Recipe Not Found');
    };
    return res.render('admin/details', {index: recipeIndex, recipe: dataRecipes.recipes[recipeIndex], ingredients: dataRecipes.recipes[recipeIndex].ingredients, steps: dataRecipes.recipes[recipeIndex].preparation})
};

//edit
exports.edit = function(req, res) {
    const { id } = req.params;


    const foundRecipe = dataRecipes.recipes.find(function (recipe, index) {
        if (index == id) {
            return recipe;
        };
    });
    

    // foundinstructor é os dados do instrutor solicitado dentro de um array

    if (!foundRecipe) return res.send('Recipe not found');

    const recipe = {
        ...foundRecipe
    };

    const ingredients = foundRecipe.ingredients;

    
    return res.render('admin/edit', { recipe, ingredients });
};

//put
exports.put = function(req, res) {
    const id = req.params;

    const foundRecipe = dataRecipes.recipes[id];
    
    if (!foundRecipe) return res.send('Recipe not found');
    
    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    dataRecipes.recipes[id] = recipe; //Em vez de usarmos o metodo push, reescrevemos os dados da string dentro do array

    fs.writeFile('data.json', JSON.stringify(data, null, 2), function (err){
        if(err) return res.send('Write error!');

        return res.redirect(`admin/recipes/${id}`);
    });

};

//delete
// exports.delete = function(req, res) {

// };