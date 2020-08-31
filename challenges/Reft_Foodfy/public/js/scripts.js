const nodeRecipes = document.querySelectorAll('._recipe');
const recipes = Array.from(nodeRecipes); // Transformando em Array

const nodeIndexBlocks = document.querySelectorAll('.recipe_index_block');
const indexBlocks = Array.from(nodeIndexBlocks); // Transformando em Array

for (let i = 0; i < recipes.length; i++) {
    const recipeDiv = recipes[i]; //divs que contém os elementos abaixo
    const trigger = recipeDiv.querySelector('.trigger'); // Texto MOSTRAR/ESCONDER
    const flexible = recipeDiv.querySelector('.flexible_tag'); // Parte do texto que some
    
    trigger.addEventListener('click', function() {
        if (trigger.innerHTML == 'MOSTRAR') {
            trigger.innerHTML = 'ESCONDER';
            flexible.classList.remove('hide');           
        } else {
            trigger.innerHTML = 'MOSTRAR';
            flexible.classList.add('hide');
        };
    });
};

for (let block of indexBlocks) {
    block.addEventListener('click', function () {
        const id = block.getAttribute('id');
        window.location.href = `/recipes/${id}`;
    });
};


function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".fieldContainerIngredients");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

document.querySelector(".add-ingredient").addEventListener("click", addIngredient);

function addStep() {
    const steps = document.querySelector("#steps");
    const fieldContainer = document.querySelectorAll(".fieldContainerSteps");

    // Realiza um clone do último ingrediente adicionado
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

    // Não adiciona um novo input se o último tem um valor vazio
    if (newField.children[0].value == "") return false;

    // Deixa o valor do input vazio
    newField.children[0].value = "";
    steps.appendChild(newField);
}

document.querySelector(".add-step").addEventListener("click", addStep);

function remove(node) {
    
    const parentDiv = node.parentNode;
    const inputNumber = (parentDiv.parentNode.children.length - 1) < 2;
    console.log(inputNumber)
    if (!inputNumber) {
        const result = confirm('Deseja realmente deletar esse campo?');
        if (result) {
            parentDiv.remove();
        } 
    } else {
        alert('Você não pode deletar esse campo.');
    }
};