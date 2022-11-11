// effects.js - модуль, который отвечает за наложение эффекта на изображение

const effectsList = document.querySelector('.effects__list');

// найдем предварительный просмотр изображения
const previewElement = document.querySelector('.img-upload__preview img');

// По умолчанию должен быть выбран эффект «Оригинал».
// На изображение может накладываться только один эффект.
// При смене эффекта, выбором одного из значений среди радиокнопок .effects__radio, добавить картинке внутри .img-upload__preview CSS-класс, соответствующий эффекту.
// Например, если выбран эффект .effect-chrome, изображению нужно добавить класс effects__preview--chrome.
// создадим объект эффектов
const effects = {
  none: {
    name: 'none',
    filter: 'none',
  },
  chrome: {
    name: 'chrome',
    filter: 'grayscale',
  },
  sepia: {
    name: 'sepia',
    filter: 'sepia',
  },
  marvin: {
    name: 'marvin',
    filter: 'invert',
  },
  phobos: {
    name: 'phobos',
    filter: 'blue',
  },
  heat: {
    name: 'heat',
    filter: 'brightness',
  },
};

// функция, которая добавляет эффект изображению
const addEffect = function (effect) {
  previewElement.className = '';
  previewElement.classList.add(`effects__preview--${effect.name}`);
  // currentEffect = effect;
};

// добавим обработчик события по кликам на эффекты
effectsList.addEventListener('click', (evt) => {
  const effect = effects[evt.target.value];

  if(effect) {
    addEffect(effect);
  }
});

// ДАННЫЕ ДЛЯ РЕАЛИЗАЦИИ СЛАЙДЕРА (ЕСЛИ БУДЕТ ВРЕМЯ ДЕЛАТЬ(ДОП.ЗАДАНИЕ))
// const sliderElement = document.querySelector('.effect-level__slider');
// const radioEffects = document.querySelector('.effects__radio');
// const imagePreview = document.querySelector('.img-upload__preview');

// // создание слайдера
// noUiSlider.create(sliderElement, {
//   range: {
//     min: 25,
//     max: 100,
//   },
//   start: 80,
//   step: 25,
//   connect: 'lower',
// });

// // функция для получения значения слайдера
// sliderElement.noUiSlider.on('update', () => {
//   valueElement.value = sliderElement.noUiSlider.get();
// });

// let currentEffect;
