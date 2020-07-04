const modalOverlay = document.querySelector('.modal_overlay');
const modal_close = modalOverlay.querySelector('.modal_close p');

const node_recipes = document.querySelectorAll('.recipe_block');
const recipes = Array.from(node_recipes);

const modal_image = document.querySelector('#modal_image')
const modal_title = document.querySelector('#modal_title');
const modal_description = document.querySelector('#modal_description');

for (let recipe of recipes) {
    let recipeName = recipe.classList[1];

    

    recipe.addEventListener("click", function() {
        modalOverlay.classList.add('modal_active');

        switch (recipeName) {
            case 'pizza':
                console.log('pizza')
                modal_image.src = 'img/pizza.png';
                break;
            
            case 'burger':
                console.log('burger')
                break;
            case 'asinhas':
                console.log('asinhas')
                break;
            case 'doce':
                console.log('doce')
                break;

            case 'lasanha':
                console.log('lasanha')
                break;

            case 'espaguete':
                console.log('espaguete')
                break;
                
            default:
                break;
        }

    });
};

modal_close.addEventListener("click", function() {
    modalOverlay.classList.remove('modal_active');
});
