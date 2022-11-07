// scaleEditing.js - модуль, который отвечает за редактирование масштаба изображения

const meaningSmallerButton = document.querySelector('.scale__control--smaller');
const meaningBiggerButton = document.querySelector('.scale__control--bigger');
const valueElement = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

// При изменении значения поля .scale__control--value изображению внутри .img-upload__preview должен добавляться соответствующий стиль CSS,
// который с помощью трансформации scale задаёт масштаб.
const zoomImage = function (percent) {
  imagePreview.style = `transform: scale(${percent / 100})`;
  // imagePreview.style = 'transform: scale(' + (percent / 100) + ')';
};

// функция уменьшения масштаба изображения
const zoomOut = function () {
  valueElement.value = `${parseInt(valueElement.value, 10) - 25}%`;

  if (valueElement.value <= 25) {
    meaningSmallerButton.setAttribute('disabled', true);
  }

  meaningBiggerButton.removeAttribute('disabled');

  zoomImage(parseInt(valueElement.value, 10));
};

// функция увеличения масштаба изображения
const zoomIn = function () {
  valueElement.value = `${parseInt(valueElement.value, 10) + 25}%`;

  if (valueElement.value >= 100) {
    meaningBiggerButton.setAttribute('disabled', true);
  }

  meaningSmallerButton.removeAttribute('disabled');

  zoomImage(parseInt(valueElement.value, 10));
};

meaningSmallerButton.addEventListener('click', zoomOut);
meaningBiggerButton.addEventListener('click', zoomIn);
