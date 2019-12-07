//Assignment #1 - hamburder menu

// depends on width - hide or show navigation
const navigation = document.querySelector('.page-navigation');
const hamburgerIcon = document.querySelector('.mobile-button');
const pageHeader = document.querySelector('.page-navigation__items');
const pageNavigationLink = document.querySelector('.page-navigation__items');

function hideOrShowNavigation () {
    if (window.innerWidth <= 375) {
        console.log(window.innerWidth);
        navigation.classList.add('page-navigation--hidden')
    } else {
        navigation.removeAttribute('style');
    }
}

window.onresize = hideOrShowNavigation;

hamburgerIcon.addEventListener('click', () => {
    navigation.removeAttribute('style');
    navigation.classList.remove('page-navigation--hidden')
    pageHeader.style.height = '100vh'
})

//colapse manu after selecting anchor link
pageNavigationLink.addEventListener('click', (e)=> {
    if(e.target.tagName === 'A') {
        // navigation.setAttribute('style', 'display:none;');
        navigation.classList.add('page-navigation--hidden')
    }
})


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