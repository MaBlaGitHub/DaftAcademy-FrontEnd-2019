

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