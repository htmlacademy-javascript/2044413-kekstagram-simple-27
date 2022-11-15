// modalMessages.js - модуль отвечает за отправку данных

// Добавим обработчик для закрытия модальных окон при кликах вне их
document.addEventListener('click', (evt) => {
  const successModal = document.querySelector('.success');
  const errorModal = document.querySelector('.error');

  if (successModal) {
    const successModalContent = successModal.querySelector('.success__inner');

    if(successModalContent.contains(evt.target) === false) {
      successModal.remove();
    }
  }

  if (errorModal) {
    const errroModalContent = errorModal.querySelector('.error__inner');

    if(errroModalContent.contains(evt.target) === false) {
      errorModal.remove();
    }
  }
});


// 3.4. Если отправка данных прошла успешно, показывается соответствующее сообщение.
// Разметку сообщения, которая находится в блоке #success внутри шаблона template, нужно разместить перед закрывающим тегом </body>.
// Сообщение должно исчезать после нажатия на кнопку .success__button,
// по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.

const successMessage = function () {
  // Найдем шаблон template
  const samplSuccessTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');

  const successModalElement = samplSuccessTemplate.cloneNode(true);

  const tagBody = document.querySelector('body');

  tagBody.appendChild(successModalElement);

  const successButton = successModalElement.querySelector('.success__button');

  successButton.addEventListener('click', () => {
    successModalElement.remove();
  });
};


// 3.5. Если при отправке данных произошла ошибка запроса, нужно показать соответствующее сообщение.
// Разметку сообщения, которая находится в блоке #error внутри шаблона template, нужно разместить перед закрывающим тегом </body>.
// Сообщение должно исчезать после нажатия на кнопку .error__button,
// по нажатию на клавишу Esc и по клику на произвольную область экрана за пределами блока с сообщением.
// В таком случае вся введённая пользователем информация сохраняется, чтобы у него была возможность отправить форму повторно.

// Сделаем модальное окно более универсальным, чтобы можно было переиспользовать
// и передать текст сообщения и текст кнопки если оно отличется от стандартного
const errorMessage = function (textMessage, textButton) {
  // Найдем шаблон template
  const sampleErrorTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');

  const errorModalElement = sampleErrorTemplate.cloneNode(true);

  if (textMessage) {
    errorModalElement.querySelector('.error__title').textContent = textMessage;
  }

  if (textButton) {
    errorModalElement.querySelector('.error__button').textContent = textButton;
  }

  const tagBody = document.querySelector('body');

  tagBody.appendChild(errorModalElement);

  const errorButton = errorModalElement.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    errorModalElement.remove();
  });
};

export { successMessage, errorMessage };
