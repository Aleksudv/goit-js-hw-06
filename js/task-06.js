
const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', event => {
    if (event.target.value.length === Number(event.target.dataset.length)){
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
} else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
}
})
console.log(inputEl);