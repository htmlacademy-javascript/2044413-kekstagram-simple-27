// effects.js - модуль, который отвечает за наложение эффекта на изображение

// найдем элемент предварительного просмотра изображения
const previewElement = document.querySelector('.img-upload__preview img');

// найдем список эффектов
const effectsListElement = document.querySelector('.effects__list');

// найдем слайдер
const sliderElement = document.querySelector('.effect-level__slider');

// найдем элемент для хранения значения слайдера
const valueSliderElement = document.querySelector('.effect-level__value');

// создадим объект эффектов
const effects = {
  none: {
    name: 'none',
    filter: 'none',
  },
  chrome: {
    name: 'chrome',
    filter: 'grayscale',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    measurement: '',
  },
  sepia: {
    name: 'sepia',
    filter: 'sepia',
    range: {
      min: 0,
      max: 1,
    },
    step: 0.1,
    measurement: '',
  },
  marvin: {
    name: 'marvin',
    filter: 'invert',
    range: {
      min: 0,
      max: 100,
    },
    step: 1,
    measurement: '%',
  },
  phobos: {
    name: 'phobos',
    filter: 'blur',
    range: {
      min: 0,
      max: 3,
    },
    step: 0.1,
    measurement: 'px',
  },
  heat: {
    name: 'heat',
    filter: 'brightness',
    range: {
      min: 1,
      max: 3,
    },
    step: 0.1,
    measurement: '',
  },
};

// текущие настройки эффекта
let currentEffect = effects.none;

// функция, которая добавляет эффект изображению
const addEffect = function (effect) {
  previewElement.style.filter = null;
  previewElement.className = '';
  previewElement.classList.add(`effects__preview--${effect.name}`);

  const previousEffect = currentEffect;
  currentEffect = effect;

  if (effect.name === 'none') {
    valueSliderElement.value = '';

    if (sliderElement.noUiSlider) {
      sliderElement.noUiSlider.destroy();
    }
  } else {
    valueSliderElement.value = effect.range.max;

    if (previousEffect.name === 'none') {
      noUiSlider.create(sliderElement, {
        range: {
          min: effect.range.min,
          max: effect.range.max,
        },
        start: effect.range.max,
        step: effect.step,
        connect: 'lower',
        format: {
          to: function (value) {
            if (Number.isInteger(value)) {
              return value.toFixed(0);
            }
            return value.toFixed(1);
          },
          from: function (value) {
            return parseFloat(value);
          },
        }
      });

      sliderElement.noUiSlider.on('update', () => {
        valueSliderElement.value = sliderElement.noUiSlider.get();
        previewElement.style.filter = `${currentEffect.filter}(${valueSliderElement.value}${currentEffect.measurement})`;
      });
    } else {
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: effect.range.min,
          max: effect.range.max,
        },
        start: effect.range.max,
        step: effect.step,
      });
    }
  }
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
  previewElement.style.filter = null;
  currentEffect = effects.none;

  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
};

// добавим обработчик события по кликам на эффекты
function addEffectsContolsListeners() {
  effectsListElement.addEventListener('click', onAddEffect);
}

function removeEffectsContolsListeners() {
  effectsListElement.removeEventListener('click', onAddEffect);
}

export { resetEffect, addEffectsContolsListeners, removeEffectsContolsListeners };
