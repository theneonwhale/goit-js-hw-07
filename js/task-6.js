// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const TEST_LENGTH = Number(event.target.dataset.length);

  input.classList.add('invalid');

  event.currentTarget.value.length === TEST_LENGTH
    ? input.classList.replace('invalid', 'valid')
    : input.classList.replace('valid', 'invalid');
}
