
const spanColorEl = document.querySelector('.color');
const btn = document.querySelector('button');

const setBg = () => {
  const getRandomHexColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + getRandomHexColor;
  spanColorEl.innerHTML = "#" + getRandomHexColor;
}

btn.addEventListener("click", setBg);
setBg();