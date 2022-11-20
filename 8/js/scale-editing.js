// scale-editing.js - модуль, который отвечает за редактирование масштаба изображения

const decreaseScaleControlElement = document.querySelector('.scale__control--smaller');
const increaseScaleControlElement = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const imagePreviewElement = document.querySelector('.img-upload__preview img');

const Scale = {
  min: 25,
  max: 100,
  step: 25,
  default: 100,
};


// При изменении масштаба изображению должно добавляться соответствующее правило CSS
const zoomImage = function (percent) {
  imagePreviewElement.style.transform = `scale(${percent / 100})`;
};


// функция уменьшения масштаба изображения
const zoomOut = function () {
  const currentScaleValue = parseInt(scaleValueElement.value, 10);
  const newScaleValue = currentScaleValue - Scale.step;

  scaleValueElement.value = `${newScaleValue}%`;

  if (newScaleValue <= Scale.min) {
    decreaseScaleControlElement.setAttribute('disabled', true);
  }

  increaseScaleControlElement.removeAttribute('disabled');

  zoomImage(newScaleValue);
};


// функция увеличения масштаба изображения
const zoomIn = function () {
  const currentScaleValue = parseInt(scaleValueElement.value, 10);
  const newScaleValue = currentScaleValue + Scale.step;

  scaleValueElement.value = `${newScaleValue}%`;

  if (newScaleValue >= Scale.max) {
    increaseScaleControlElement.setAttribute('disabled', true);
  }

  decreaseScaleControlElement.removeAttribute('disabled');

  zoomImage(newScaleValue);
};


// функция сброса масштаба изображения
const resetZoom = function () {
  increaseScaleControlElement.setAttribute('disabled', true);

  zoomImage(Scale.default);
};

function addZoomContolsListeners() {
  decreaseScaleControlElement.addEventListener('click', zoomOut);
  increaseScaleControlElement.addEventListener('click', zoomIn);
}

function removeZoomContolsListeners() {
  decreaseScaleControlElement.removeEventListener('click', zoomOut);
  increaseScaleControlElement.removeEventListener('click', zoomIn);
}

export { resetZoom, addZoomContolsListeners, removeZoomContolsListeners };
