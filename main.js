const submitButton = document.querySelector('#submit-button');
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items = document.querySelector('.items');
const body = document.querySelector('body');

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if (nameValue === '' || emailValue === ''){
        return alert('Por favor, preencha todos os campos.');
    }

    myForm.style.background = "green";
    items.firstElementChild.textContent = nameValue;
    items.children[1].textContent = emailValue;

    body.style.background = "pink";
})

// nameInput.addEventListener('change', function(event){
//     console.log(event.target.value);
// });