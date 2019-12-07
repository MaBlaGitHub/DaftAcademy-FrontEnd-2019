//Assignment #1 - hamburder menu

// depends on width - hide or show navigation
const navigation = document.querySelector('.page-navigation');
const hamburgerIcon = document.querySelector('.mobile-button');
const pageHeader = document.querySelector('.page-navigation__items');
const pageNavigationLink = document.querySelector('.page-navigation__items');

function colapseMenuOnLoad (){
    navigation.classList.add('page-navigation--hidden')
}

window.onload = colapseMenuOnLoad;

hamburgerIcon.addEventListener('click', () => {
    if(navigation.className === 'page-navigation') {
        hamburgerIcon.classList.remove('mobile-button-close');
        hamburgerIcon.classList.add('mobile-button-hamburger');
        pageHeader.classList.remove('page-navigation__items--expand');
        navigation.classList.add('page-navigation--hidden');
    } else if (!navigation.className !== 'page-navigation') {
        hamburgerIcon.classList.remove('mobile-button-hamburger');
        hamburgerIcon.classList.add('mobile-button-close');
        navigation.classList.remove('page-navigation--hidden');
        pageHeader.classList.add('page-navigation__items--expand');
    }
})

//colapse manu after selecting anchor link
pageNavigationLink.addEventListener('click', (e)=> {
    if(e.target.tagName === 'A') {
        navigation.classList.add('page-navigation--hidden')
    }
})

function hideOrShowNavigation () {
    if (window.innerWidth <= 375) {
        console.log(window.innerWidth);
        navigation.classList.add('page-navigation--hidden')
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