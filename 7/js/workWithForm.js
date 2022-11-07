// workWithForm.js - это модуль, который отвечает за работу с формой

import {isEscapeKey} from './util.js';
import { commentValidate, resetValidation } from './formValidate.js';

// Сначала с помощью querySelector найдём форму, с которой будем работать, и сохраним ее в переменную
const form = document.querySelector('.img-upload__form');

const fileUploadControl = form.querySelector('#upload-file');
const imageEditingForm = form.querySelector('.img-upload__overlay');
const closingImageEditingForm = form.querySelector('#upload-cancel');
const textDescription = form.querySelector('.text__description');
const buttonSubmit = form.querySelector('.img-upload__submit');

// Функция, которая показывает форму редактирования изображения
function openForm() {
  imageEditingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  textDescription.addEventListener('change', commentValidate);
}

// Функция, которая закрывает форму редактирования изображения
function closeForm() {
  imageEditingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  textDescription.removeEventListener('change', commentValidate);

  resetValidation();
}

// После выбора изображения (изменения значения поля #upload-file), показывается форма редактирования изображения.
// У элемента .img-upload__overlay удаляется класс hidden, а body задаётся класс modal-open.
fileUploadControl.addEventListener('change', openForm);

// Закрытие формы редактирования изображения производится либо нажатием на кнопку #upload-cancel, либо нажатием клавиши Esc.
// Элементу .img-upload__overlay возвращается класс hidden. У элемента body удаляется класс modal-open.
closingImageEditingForm.addEventListener('click', closeForm);

// Закрытие формы редактирования изображения нажатием клавиши Esc.
document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeForm();
  }
});

// Отправка формы редактирования изображения
buttonSubmit.addEventListener('click', (evt) => {
  commentValidate(evt);
});
