// form.js - это модуль, который отвечает за работу с формой

import { isEscapeKey } from './util.js';
import { onFormValidate, resetValidation } from './form-validate.js';
import { successMessage, errorMessage } from './modal-messages.js';
import { resetEffect, addEffectsContolsListeners, removeEffectsContolsListeners } from './effects.js';
import { resetZoom, addZoomContolsListeners, removeZoomContolsListeners } from './scale-editing.js';
import { sendDataOnServer } from './api.js';

// Найдём форму, с которой будем работать
const formElement = document.querySelector('.img-upload__form');

const fileUploadControlElement = formElement.querySelector('#upload-file');
const imageEditingFormElement = formElement.querySelector('.img-upload__overlay');
const closingImageEditingFormElement = formElement.querySelector('#upload-cancel');
const textDescriptionElement = formElement.querySelector('.text__description');


// Функция, которая обрабатывает нажатия клавиши Esc
const onEscKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    const successModalElement = document.querySelector('.success');
    const errorModalElement = document.querySelector('.error');

    if (successModalElement) {
      successModalElement.remove();
    } else if (errorModalElement) {
      errorModalElement.remove();
    } else {
      onCloseForm();
    }
  }
};

// Функция обработки отправки формы
const onUserFormSubmit = (evt) => {
  evt.preventDefault();

  const imageUploadFormSubmitElement = document.querySelector('.img-upload__submit');
  imageUploadFormSubmitElement.setAttribute('disabled', true);

  const isValid = onFormValidate(evt);

  if (isValid) {
    const formData = new FormData(evt.target);

    sendDataOnServer(
      formData,
      () => {
        onCloseForm();
        successMessage();
      },
      () => errorMessage(),
      () => imageUploadFormSubmitElement.removeAttribute('disabled'),
    );
  } else {
    imageUploadFormSubmitElement.removeAttribute('disabled');
  }
};

// Функция, которая показывает форму редактирования изображения
const onOpenForm = () => {
  imageEditingFormElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  addEffectsContolsListeners();
  addZoomContolsListeners();

  // Добавим обработчик на изменение текстового поля в форме
  textDescriptionElement.addEventListener('change', onFormValidate);

  // Добавим обработчик на клик по кнопке закрытия формы
  closingImageEditingFormElement.addEventListener('click', onCloseForm);

  // Добавим обработчик нажатием клавиши Esc.
  document.addEventListener('keydown', onEscKeyDown);

  // Добавим обработчик на отправку формы
  formElement.addEventListener('submit', onUserFormSubmit);
};

// Функция, которая закрывает форму редактирования изображения
function onCloseForm() {
  imageEditingFormElement.classList.add('hidden');
  document.body.classList.remove('modal-open');

  removeEffectsContolsListeners();
  removeZoomContolsListeners();
  textDescriptionElement.removeEventListener('change', onFormValidate);
  closingImageEditingFormElement.removeEventListener('click', onCloseForm);
  document.removeEventListener('keydown', onEscKeyDown);
  formElement.removeEventListener('submit', onUserFormSubmit);

  resetValidation();
  formElement.reset();
  resetEffect();
  resetZoom();
}

const setListenerFileUpload = () => {
  // Добавим обработчик на добавлнение изображения
  fileUploadControlElement.addEventListener('change', onOpenForm);
};

export { setListenerFileUpload };
