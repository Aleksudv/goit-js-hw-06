

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    spanEl.textContent = event.currentTarget.value;
});
console.log(inputEl);
console.log(spanEl);