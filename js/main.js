const formInput = document.getElementById('form-input');
const alertMsg = document.getElementById('alert-msg');
const email = document.getElementById('email');

function notifyUser(e) {
    e.preventDefault();
    let validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.value.match(validation)) {
        alertMsg.style.opacity = 0;
    } else {
        alertMsg.style.opacity = 1;
        setTimeout(() => alertMsg.remove(), 2000)
    }
    email.value = '';
}

formInput.addEventListener('submit', notifyUser)