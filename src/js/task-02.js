const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// 1 ВАРІАНТ

const ingredientsListEl = document.querySelector('ul');

const listItem1 = document.createElement('li');
listItem1.classList.add('item');
listItem1.textContent = ingredients[0];

const listItem2 = document.createElement('li');
listItem2.classList.add('item');
listItem2.textContent = ingredients[1];

const listItem3 = document.createElement('li');
listItem3.classList.add('item');
listItem3.textContent = ingredients[2];

const listItem4 = document.createElement('li');
listItem4.classList.add('item');
listItem4.textContent = ingredients[3];

const listItem5 = document.createElement('li');
listItem5.classList.add('item');
listItem5.textContent = ingredients[4];

const listItem6 = document.createElement('li');
listItem6.classList.add('item');
listItem6.textContent = ingredients[5];

ingredientsListEl.append(listItem1, listItem2, listItem3, listItem4, listItem5, listItem6);

console.log(ingredientsListEl);






// 2 ВАРІАНТ

// const list = document.querySelector('#ingredients');

// const markup = ingredients.map((el) => `<li class="item">${el}</li>`).join("");

// list.insertAdjacentHTML("beforeend", markup);

// console.log(list);