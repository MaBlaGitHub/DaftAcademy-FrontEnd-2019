//Assignment #1 - hamburger menu
const header = document.querySelector('.page-header');
const navigation = document.querySelector('.page-navigation');
const hamburgerIcon = document.querySelector('.mobile-button');
const pageHeader = document.querySelector('.page-navigation__items');
const pageNavigationLink = document.querySelector('.page-navigation__items');

function showMenu(){
    navigation.classList.remove('page-navigation--hidden');
    header.classList.add('page-header--expand');
}

function hideMenu() {
    navigation.classList.add('page-navigation--hidden');
    header.classList.remove('page-header--expand');
}

function showMenuItems() {
    pageHeader.classList.add('page-navigation__items--expand');
}

function hideMenuItems(){
    pageHeader.classList.remove('page-navigation__items--expand');
}

function addCloseMenuIcon(){
    hamburgerIcon.classList.add('mobile-button-close');
}

function removeCloseMenuIcon(){
    hamburgerIcon.classList.remove('mobile-button-close');  
}

function addHamburgerMenuIcon() {
    hamburgerIcon.classList.add('mobile-button-hamburger');
}

function removeHamburgerMenuIcon(){
    hamburgerIcon.classList.remove('mobile-button-hamburger');
}

// colapse menu after page reloads
function colapseMenuOnLoad (){
    hideMenu();
    removeCloseMenuIcon();
    addHamburgerMenuIcon();
}
window.onload = colapseMenuOnLoad;

// switching between hamburger menu states
hamburgerIcon.addEventListener('click', () => {
    if(navigation.className === 'page-navigation') {
        hideMenuItems();
        hideMenu();
        removeCloseMenuIcon();
        addHamburgerMenuIcon();
    } else if (navigation.className !== 'page-navigation') {
        removeHamburgerMenuIcon();
        addCloseMenuIcon();
        showMenu();
        showMenuItems();
    }
})

//colapse menu after selecting anchor link
pageNavigationLink.addEventListener('click', (e)=> {
    if(e.target.tagName === 'A') {
        hideMenu();
        removeCloseMenuIcon();
        addHamburgerMenuIcon();
    }
})

// depends on width - hide or show navigation 
// between 320-375px menu should be visible
function hideOrShowNavigation () {
    if (window.innerWidth <= 375) {
        hideMenu();
        removeCloseMenuIcon();
        addHamburgerMenuIcon()
    }
}
window.onresize = hideOrShowNavigation;

// Assignment #2
const buyATicketButton = document.querySelector('.concerts');

buyATicketButton.addEventListener('click', (e) => {
    if (e.target.className === 'button') {
        const button = e.target.parentElement;
        button.children[2].remove()
        const textElement = document.createElement('p');
        textElement.classList.add('button--success')
        textElement.textContent = 'have fun!';
        button.appendChild(textElement);
    }
})

// Assignment #3
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    console.log(Object.fromEntries(new FormData(form)))
    e.preventDefault()
})