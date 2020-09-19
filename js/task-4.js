// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

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
