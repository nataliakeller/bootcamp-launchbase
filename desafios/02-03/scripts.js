const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const closeModal = document.querySelector('.material-icons');

const iframe = modalOverlay.querySelector('iframe')

for (let card of cards) {
    card.addEventListener("click", function() {
        modalOverlay.classList.add('active');
        iframe.src = `https://rocketseat.com.br/${card.id}`
    });
};

closeModal.addEventListener("click", function () {
    modalOverlay.classList.remove('active');
});


