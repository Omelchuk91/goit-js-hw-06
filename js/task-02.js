const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const elements = ingredients.map((ingredient) => {
  const newList = document.createElement("li");
  newList.textContent = `${ingredient}`;
  newList.classList.add('item');

  return newList;
});

list.append(...elements);
console.log(elements);



