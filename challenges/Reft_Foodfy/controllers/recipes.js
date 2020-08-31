const fs = require('fs'); // File System
const { create } = require('browser-sync');
const dataRecipes = require('../data.json');

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
    let { image, title, ingredients, steps, information } = req.body;
    const author = "Júlia Kinoto";
    
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

        return res.redirect('/admin/recipes');
    });
};

//show
exports.show = function(req, res) {
    const recipeIndex = req.params.index;

    if (!dataRecipes.recipes[recipeIndex]) {
        return res.send('Recipe Not Found');
    };
    return res.render('admin/details', {index: recipeIndex, recipe: dataRecipes.recipes[recipeIndex], ingredients: dataRecipes.recipes[recipeIndex].ingredients, steps: dataRecipes.recipes[recipeIndex].steps, information: dataRecipes.recipes[recipeIndex].information})
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
        ...foundRecipe,
        id
    };

    const ingredients = foundRecipe.ingredients;
    const steps = foundRecipe.steps;
    const information = foundRecipe.information;

    
    return res.render('admin/edit', { recipe, ingredients, steps, information});
};

//put
exports.put = function(req, res) {
    const { id } = req.body;
    const foundRecipe = dataRecipes.recipes[id];

    if (!foundRecipe) return res.send('Recipe not found');
    
    const recipe = {
        ...foundRecipe,
        ...req.body
    }

    dataRecipes.recipes[id] = recipe; //Em vez de usarmos o metodo push, reescrevemos os dados da string dentro do array

    fs.writeFile('data.json', JSON.stringify(dataRecipes, null, 2), function (err){
        if(err) return res.send('Write error!');

        return res.redirect(`/admin/recipes/${id}`);
    });

};

exports.delete = function (req, res) {
    const id = req.body.id;

    const filterRecipes = dataRecipes.recipes.filter(function(recipe, index) {
        return index != id;
    });

    dataRecipes.recipes = filterRecipes;

    fs.writeFile('data.json', JSON.stringify(dataRecipes, null, 2), function (err){
        if(err) return res.send('Write error!');
        
        return res.redirect('/admin/recipes/');
    });

};