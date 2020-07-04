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
                modal_image.src = 'img/pizza.png';
                modal_title.innerHTML = 'Pizza 4 Estações';
                modal_description.innerHTML = 'Por Fabiana Melo';

                break;
            
            case 'burger':
                modal_image.src = 'img/burger.png';
                modal_title.innerHTML = 'Triplo Bacon Burger';
                modal_description.innerHTML = ' por Jorge Relato';

                break;
            case 'asinhas':
                modal_image.src = 'img/asinhas.png';
                modal_title.innerHTML = 'Asinhas de frango ao barbecue';
                modal_description.innerHTML = 'por Vania Steroski';
                break;
            case 'doce':
                modal_image.src = 'img/doce.png';
                modal_title.innerHTML = 'Docinhos pão-do-céu';
                modal_description.innerHTML = 'por Ricardo Golvea';
                break;

            case 'lasanha':
                modal_image.src = 'img/lasanha.png';
                modal_title.innerHTML = 'Lasanha mac n\' cheese';
                modal_description.innerHTML = 'por Juliana Vieira';
                break;

            case 'espaguete':
                modal_image.src = 'img/espaguete.png';
                modal_title.innerHTML = 'Espaguete ao alho';
                modal_description.innerHTML = 'por Júlia Kinoto';
                break;
                
            default:
                break;
        };
    });
};

modal_close.addEventListener("click", function() {
    modalOverlay.classList.remove('modal_active');
});

modalOverlay.addEventListener("click", function() {
    modalOverlay.classList.remove('modal_active');
});

window.onclick = function(event) {
    if (event.target == modalOverlay) {
        modalOverlay.classList.remove('modal_active');
    };
};

