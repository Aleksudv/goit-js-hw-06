const form = document.querySelector('.login-form')

console.log(form);

form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
    ev.preventDefault();
    const {
        elements: { email, password }
    } = ev.currentTarget;

    if (email.value === "" || password.value === "") {
    return console.log('Все поля повинні бути заповненні');
}

    console.log(`Email: ${email.value}, Password: ${password.value}`);
    ev.currentTarget.reset();
}
