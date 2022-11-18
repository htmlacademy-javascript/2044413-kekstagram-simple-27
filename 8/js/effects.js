// effects.js - модуль, который отвечает за наложение эффекта на изображение

// найдем элемент предварительного просмотра изображения
const previewElement = document.querySelector('.img-upload__preview img');

// найдем список эффектов
const effectsListElement = document.querySelector('.effects__list');

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
};

// функция, для обработчика события кликов на эффекты
const onAddEffect = function (evt) {
  const effect = effects[evt.target.value];

  if (effect) {
    addEffect(effect);
  }
};

// функция, которая сбрасывает эффект изображению
const resetEffect = function () {
  previewElement.className = '';
};

// добавим обработчик события по кликам на эффекты
function addEffectsContolsListeners() {
  effectsListElement.addEventListener('click', onAddEffect);
}

function removeEffectsContolsListeners() {
  effectsListElement.removeEventListener('click', onAddEffect);
}

export { resetEffect, addEffectsContolsListeners, removeEffectsContolsListeners };
