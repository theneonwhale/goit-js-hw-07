// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  input: document.querySelector('[type="number"]'),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.btnRender.addEventListener('click', onBtnMakeBoxes);
refs.btnDestroy.addEventListener('click', onBtnClearBoxes);

function onBtnMakeBoxes() {
  refs.boxes.innerHTML = '';

  const num = refs.input.value;
  const elements = [];

  for (let i = 1; i <= num; i += 1) {
    const divEl = document.createElement('div');

    divEl.style.backgroundColor = randomColorRGB();
    divEl.style.width = (i + 2) * 10 + 'px';
    divEl.style.height = (i + 2) * 10 + 'px';

    elements.push(divEl);
  }

  refs.boxes.append(...elements);
}

function onBtnClearBoxes() {
  refs.boxes.innerHTML = '';
}

function randomColorRGB() {
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);

  const r = random(0, 255);
  const g = random(0, 255);
  const b = random(0, 255);

  return `rgb(${r},${g},${b})`;
}
