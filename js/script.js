const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const logoPlacement = document.querySelector('.logoOnTop');


// Hamburger Menu EventListeners 
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
mainMenu.addEventListener('click', close);
logoPlacement.addEventListener('click', close);

//Hamburger Menu function 
function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    logoPlacement.style.position = 'fixed';
    logoPlacement.style.zIndex = '100';
}

function close() {
    mainMenu.style.top = '-100%';
    logoPlacement.style.position = 'static';
}