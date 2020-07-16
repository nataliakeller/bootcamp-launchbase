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
        }
    });
};

for (let block of indexBlocks) {
    block.addEventListener('click', function () {
        const id = block.getAttribute('id');
        window.location.href = `/recipes/${id}`
    })
}