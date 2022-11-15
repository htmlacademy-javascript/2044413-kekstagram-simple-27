// workWithForm.js - это модуль, который отвечает за работу с формой

import { isEscapeKey } from './util.js';
import { formValidate, resetValidation } from './formValidate.js';
import { successMessage, errorMessage } from './modalMessages.js';
import { resetEffect } from './effects.js';
import { resetZoom } from './scaleEditing.js';
import { sendDataOnServer } from './api.js';

// Сначала с помощью querySelector найдём форму, с которой будем работать, и сохраним ее в переменную
const form = document.querySelector('.img-upload__form');

const fileUploadControl = form.querySelector('#upload-file');
const imageEditingForm = form.querySelector('.img-upload__overlay');
const closingImageEditingForm = form.querySelector('#upload-cancel');
const textDescription = form.querySelector('.text__description');

// Функция, которая показывает форму редактирования изображения
function openForm() {
  imageEditingForm.classList.remove('hidden');
  document.body.classList.add('modal-open');

  textDescription.addEventListener('change', formValidate);
}

// Функция, которая закрывает форму редактирования изображения
function closeForm() {
  imageEditingForm.classList.add('hidden');
  document.body.classList.remove('modal-open');

  textDescription.removeEventListener('change', formValidate);

  resetValidation();
  form.reset();
  resetEffect();
  resetZoom();
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

    const successModal = document.querySelector('.success');
    const errorModal = document.querySelector('.error');

    if (successModal) {
      successModal.remove();
    } else if (errorModal) {
      errorModal.remove();
    } else {
      closeForm();
    }
  }
});

// Отправка формы редактирования изображения
const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const publishButton = document.querySelector('.img-upload__submit');
    publishButton.setAttribute('disabled', true);

    const isValid = formValidate(evt);

    if (isValid) {
      const formData = new FormData(evt.target);

      sendDataOnServer(
        formData,
        () => {
          onSuccess();
          successMessage();
        },
        () => errorMessage(),
        () => publishButton.removeAttribute('disabled'),
      );
      // Вынесла отправку данных в отдельный модуль
      // fetch(
      //   'https://27.javascript.pages.academy/kekstagram-simple',
      //   {
      //     method: 'POST',
      //     body: formData,
      //   },
      // ).then(() => onSuccess())
      //   .then(() => successMessage())
      //   .catch(() => errorMessage())
      //   .finally(() => publishButton.removeAttribute('disabled'));
    } else {
      publishButton.removeAttribute('disabled');
    }
  });

};

export { openForm, closeForm, setUserFormSubmit };
