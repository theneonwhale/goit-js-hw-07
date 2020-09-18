// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
{
  /* <div id="counter">
  <button type="button" data-action="decrement">
    -1
  </button>
  <span id="value">0</span>
  <button type="button" data-action="increment">
    +1
  </button>
</div>; */
}

// const counterEl = document.querySelector('#counter');
// console.log('counterEl', counterEl);
// const incrementBtn = counterEl.querySelector('[data-action="increment"]');
// console.log('incrementBtn', incrementBtn);
// const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
// console.log('decrementBtn', decrementBtn);
// const valueEl = counterEl.querySelector('#value');
// console.log('valueEl', valueEl);

const refs = {
  counterEl: document.querySelector('#counter'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

function increment() {
  counterValue += 1;

  refs.valueEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;

  refs.valueEl.textContent = counterValue;
}

refs.incrementBtn.addEventListener('click', increment);

refs.decrementBtn.addEventListener('click', decrement);
