const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;


function validateForm(){
    // Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    message.textContent = 'Please fill out all the fields';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
}


function processFormData(e){
    e.preventDefault();
    // Validate form
    validateForm();
}


// Event Listner
form.addEventListener('submit',processFormData);