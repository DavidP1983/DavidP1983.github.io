window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
    
    window.addEventListener('click', (event) => {
        if(event.target != hamburger && event.target.parentNode != hamburger) {
            hamburger.classList.remove('hamburger_active');
            menu.classList.remove('menu_active');
            // console.log(event.target.parentNode);
        }
    });
});