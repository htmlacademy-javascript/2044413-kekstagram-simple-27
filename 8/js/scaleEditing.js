// scaleEditing.js - модуль, который отвечает за редактирование масштаба изображения

import { MAX_SCALE_PICTURE_VALUE, MIN_SCALE_PICTURE_VALUE, STEP_SCALE_PICTURE_VALUE } from './constants.js';

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
  const currentScaleValue = parseInt(valueElement.value, 10);
  const newScaleValue = currentScaleValue - STEP_SCALE_PICTURE_VALUE;

  valueElement.value = `${newScaleValue}%`;

  if (newScaleValue <= MIN_SCALE_PICTURE_VALUE) {
    meaningSmallerButton.setAttribute('disabled', true);
  }

  meaningBiggerButton.removeAttribute('disabled');

  zoomImage(newScaleValue);
};


// функция увеличения масштаба изображения
const zoomIn = function () {
  const currentScaleValue = parseInt(valueElement.value, 10);
  const newScaleValue = currentScaleValue + STEP_SCALE_PICTURE_VALUE;

  valueElement.value = `${newScaleValue}%`;

  if (newScaleValue >= MAX_SCALE_PICTURE_VALUE) {
    meaningBiggerButton.setAttribute('disabled', true);
  }

  meaningSmallerButton.removeAttribute('disabled');

  zoomImage(newScaleValue);
};


// функция сброса масштаба изображения
const resetZoom = function () {
  meaningBiggerButton.setAttribute('disabled', true);

  zoomImage(100);
};


meaningSmallerButton.addEventListener('click', zoomOut);
meaningBiggerButton.addEventListener('click', zoomIn);


export { resetZoom };
