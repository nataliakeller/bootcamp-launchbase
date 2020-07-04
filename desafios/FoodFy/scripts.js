const modalOverlay = document.querySelector('.modal_overlay');
const modal_close = modalOverlay.querySelector('.modal_close p');

const node_recipes = document.querySelectorAll('.recipe_block');
const recipes = Array.from(node_recipes);

for (let recipe of recipes) {
    recipe.addEventListener("click", function() {
        modalOverlay.classList.add('modal_active');
        

    });
};

modal_close.addEventListener("click", function() {
    modalOverlay.classList.remove('modal_active');
});


console.log(recipes)