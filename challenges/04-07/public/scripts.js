const currentPage = location.pathname;
const menuItems = document.querySelectorAll('header ul .menu a');

const formDelete =  document.querySelector('#form-delete');

formDelete.addEventListener('submit', function(event) {
    const confirmation = confirm("Do you want to delete?");
    if (!confirmation) {
        event.preventDefault();
    };
});

for (item of menuItems) {
    if(currentPage.includes(item.getAttribute('href'))) {
        item.classList.add('active');
    }
}
