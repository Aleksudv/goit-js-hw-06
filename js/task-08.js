const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit);

function handleSubmit(ev) {
    ev.preventDefault();
    const {
        elements: { email, password }
    } = ev.currentTarget;

    if (email.value === "" || password.value === "") {
   alert('Всі поля повинні бути заповнені');
    }
    
    const userData = {
        [email.name]: email.value,
        [password.name]:password.value
    }

    console.log(userData);
    ev.currentTarget.reset();
}
