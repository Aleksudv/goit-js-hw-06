const fontSizeControl = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');
console.log(fontSizeControl);
console.log(spanText);


fontSizeControl.addEventListener('input', (ev) => {
    spanText.style.fontSize = `${ev.currentTarget.value}px`;
    return console.log(ev.currentTarget);
});
