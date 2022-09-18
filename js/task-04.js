const counter = {
  value: 0,
  increment() {
    console.log("increment -> this", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement -> this", this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  console.log("Кликнули на декремент");

  counter.decrement();
  console.log(counter);
  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  console.log("Кликнули на инкремент");

  counter.increment();
  console.log(counter);
  counterValue.textContent = counter.value;
});

console.log(window);
