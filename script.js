//Assignment #1 - hamburger menu
const header = document.querySelector('.page-header');
const navigation = document.querySelector('.page-navigation');
const hamburgerIcon = document.querySelector('.mobile-button');
const pageHeader = document.querySelector('.page-navigation__items');
const pageNavigationLink = document.querySelector('.page-navigation__items');

// change state from hamburger to X
hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('modify')
});

const showMenu = () => {
    navigation.classList.toggle('page-navigation--hidden');
    header.classList.toggle('page-header--expand');
}

const hideMenu = () => {
    navigation.classList.add('page-navigation--hidden');
    header.classList.remove('page-header--expand');
}

const showMenuItems = () => {
    pageHeader.classList.add('page-navigation__items--expand');
}

const hideMenuItems = () => {
    pageHeader.classList.remove('page-navigation__items--expand');
}

const addCloseMenuIcon = () => {
    hamburgerIcon.classList.add('mobile-button-close');
}

const removeCloseMenuIcon = () => {
    hamburgerIcon.classList.remove('mobile-button-close');  
}

// colapse menu after page reloads
const colapseMenuOnLoad = () => {
    hideMenu();
    removeCloseMenuIcon();
}

window.addEventListener('load', () => {
    colapseMenuOnLoad();
})

// switching between hamburger menu states
hamburgerIcon.addEventListener('click', () => {
    if(navigation.className === 'page-navigation') {
        hideMenuItems();
        hideMenu();
        removeCloseMenuIcon();
    } else if (navigation.className !== 'page-navigation') {
        addCloseMenuIcon();
        showMenu();
        showMenuItems();
    }
})

//colapse menu after selecting anchor link
pageNavigationLink.addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        hideMenu();
        hamburgerIcon.classList.toggle('modify');
    }
})

// Assignment #2
const buyATicketButton = document.querySelectorAll('.concerts__info > button');

buyATicketButton.forEach(btn => {
    btn.addEventListener('click', () => {
        let textElement = document.createElement('p');
        textElement.textContent = 'Have fun!';
        textElement.classList.add('button--success');
        btn.replaceWith(textElement);
    });
});

// Assignment #3
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    console.log(Object.fromEntries(new FormData(form)))
    e.preventDefault()
})