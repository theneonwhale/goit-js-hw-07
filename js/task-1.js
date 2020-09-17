// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const categoriesEl = document.querySelector('#categories');
const itemEl = categoriesEl.querySelectorAll('.item');

const showElementsQuantity = elements =>
  `В списке ${elements.length} категории.`;

console.log(showElementsQuantity(itemEl));

itemEl.forEach(element => {
  const titleEl = element.querySelector('h2');
  const categoryEl = element.querySelectorAll('li');

  console.log(`
    Категория: ${titleEl.textContent}
    Количество элементов: ${categoryEl.length}
    `);
});

// const showTitleAndElementsQuantity = elements => {
//   //   const titleAndElements = [];
//   elements.forEach(element => {
//     const titleEl = element.querySelector('h2');
//     const categoryEl = element.querySelectorAll('li');

//     console.log(`
//     Категория: ${titleEl.textContent}
//     Количество элементов: ${categoryEl.length}
//     `);
//     // titleAndElements.push(`
//     // Категория: ${titleEl.textContent}
//     // Количество элементов: ${categoryEl.length}
//     // `);
//   });
//   //   return titleAndElements;
// };

// console.log(showTitleAndElementsQuantity(itemEl));
