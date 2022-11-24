// scale-editing.js - модуль, который отвечает за редактирование масштаба изображения

const buttonDecreaseScaleElement = document.querySelector('.scale__control--smaller');
const buttonIncreaseScaleElement = document.querySelector('.scale__control--bigger');
const valueScaleElement = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview img');

const Scale = {
  min: 25,
  max: 100,
  step: 25,
  default: 100,
};


// При изменении масштаба изображению должно добавляться соответствующее правило CSS
const zoomImage = (percent) => {
  imagePreviewElement.style.transform = `scale(${percent / 100})`;
};


// функция уменьшения масштаба изображения
const zoomOut = () => {
  const currentScaleValue = parseInt(valueScaleElement.value, 10);
  const newScaleValue = currentScaleValue - Scale.step;

  valueScaleElement.value = `${newScaleValue}%`;

  if (newScaleValue <= Scale.min) {
    buttonDecreaseScaleElement.setAttribute('disabled', true);
  }

  buttonIncreaseScaleElement.removeAttribute('disabled');

  zoomImage(newScaleValue);
};


// функция увеличения масштаба изображения
const zoomIn = () => {
  const currentScaleValue = parseInt(valueScaleElement.value, 10);
  const newScaleValue = currentScaleValue + Scale.step;

  valueScaleElement.value = `${newScaleValue}%`;

  if (newScaleValue >= Scale.max) {
    buttonIncreaseScaleElement.setAttribute('disabled', true);
  }

  buttonDecreaseScaleElement.removeAttribute('disabled');

  zoomImage(newScaleValue);
};


// функция сброса масштаба изображения
const resetZoom = () => {
  buttonIncreaseScaleElement.setAttribute('disabled', true);

  zoomImage(Scale.default);
};

const addZoomContolsListeners = () => {
  buttonDecreaseScaleElement.addEventListener('click', zoomOut);
  buttonIncreaseScaleElement.addEventListener('click', zoomIn);
};

const removeZoomContolsListeners = () => {
  buttonDecreaseScaleElement.removeEventListener('click', zoomOut);
  buttonIncreaseScaleElement.removeEventListener('click', zoomIn);
};

export { resetZoom, addZoomContolsListeners, removeZoomContolsListeners };
