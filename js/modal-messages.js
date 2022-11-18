// modalMessages.js - модуль отвечает за отправку данных

import { isEscapeKey } from './util.js';

// Функция, которая обрабатывает нажатия клавиши Esc для модального окна успеха
function onEscKeyDownSuccessMessage(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    const successModalElement = document.querySelector('.success');

    successModalElement.remove();
  }
}

// Функция, которая обрабатывает нажатия клавиши Esc для модального окна ошибки
function onEscKeyDownErrorMessage(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    const errorModalElement = document.querySelector('.error');

    errorModalElement.remove();
  }
}

// Функция, которая обрабатывает клик вне модального окна успеха
function onClickOutSuccessMessage(evt) {
  const successModalElement = document.querySelector('.success');

  if (successModalElement) {
    const successModalContent = successModalElement.querySelector('.success__inner');

    if (!successModalContent.contains(evt.target)) {
      successModalElement.remove();
    }
  }
}

// Функция, которая обрабатывает клик вне модального окна ошибки
function onClickOutErrorMessage(evt) {
  const errorModalElement = document.querySelector('.error');

  if (errorModalElement) {
    const errroModalContent = errorModalElement.querySelector('.error__inner');

    if (!errroModalContent.contains(evt.target)) {
      errorModalElement.remove();
    }
  }
}

// Показывается соответствующее сообщение, если отправка данных прошла успешно
const successMessage = function () {
  // Найдем шаблон template
  const samplSuccessTemplateElement = document.querySelector('#success')
    .content
    .querySelector('.success');

  const successModalElement = samplSuccessTemplateElement.cloneNode(true);

  const tagBodyElement = document.querySelector('body');

  tagBodyElement.appendChild(successModalElement);

  const successButtonElement = successModalElement.querySelector('.success__button');

  // Добавим обработчик нажатием клавиши Esc.
  document.addEventListener('keydown', onEscKeyDownSuccessMessage);

  // Добавим обработчик для закрытия модального окона при кликах вне его
  document.addEventListener('click', onClickOutSuccessMessage);

  successButtonElement.addEventListener('click', () => {
    successModalElement.remove();
  });
};

// Показывается соответствующее сообщение, если отправка данных прошла с ошибкой
// Сделаем модальное окно более универсальным, чтобы можно было переиспользовать
// и передать текст сообщения и текст кнопки если оно отличется от стандартного
const errorMessage = function (textMessage, textButton) {
  // Найдем шаблон template
  const sampleErrorTemplateElement = document.querySelector('#error')
    .content
    .querySelector('.error');

  const errorModalElement = sampleErrorTemplateElement.cloneNode(true);

  if (textMessage) {
    errorModalElement.querySelector('.error__title').textContent = textMessage;
  }

  if (textButton) {
    errorModalElement.querySelector('.error__button').textContent = textButton;
  }

  const tagBodyElement = document.querySelector('body');

  tagBodyElement.appendChild(errorModalElement);

  const errorButtonElement = errorModalElement.querySelector('.error__button');

  // Добавим обработчик нажатием клавиши Esc.
  document.addEventListener('keydown', onEscKeyDownErrorMessage);

  // Добавим обработчик для закрытия модального окона при кликах вне его
  document.addEventListener('click', onClickOutErrorMessage);

  errorButtonElement.addEventListener('click', () => {
    errorModalElement.remove();
  });
};

export { successMessage, errorMessage };
