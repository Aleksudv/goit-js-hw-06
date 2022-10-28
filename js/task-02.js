const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




// 1 ВАРІАНТ


const ingredientsListEl = document.querySelector('#ingredients');
console.log(ingredientsListEl);

let markup = ingredients.map(function (el) {
  const li = document.createElement('li');
  li.classList.add('item')
  li.textContent = el;
  ingredientsListEl.append(li);
});




// 2 ВАРІАНТ


// const list = document.querySelector('#ingredients');

// const markup = ingredients.map((el) => `<li class="item">${el}</li>`).join("");

// list.insertAdjacentHTML("beforeend", markup);

// console.log(list);



