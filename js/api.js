// api.js - модуль для работы с настоящим сервером

const BASE_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

// Функция для получения данных с сервера
const getDataFromServer = function (onSuccess, onError) {
  fetch(`${BASE_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      // Бросается ошибка, чтобы прервать выполнение кода и попасть в catch
      throw new Error();
    })
    .then(onSuccess)
    .catch(onError);
};

// Функция для отправки данных на сервера
const sendDataOnServer = function (data, onSuccess, onError, onFinally) {
  fetch(
    BASE_URL,
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      // Бросается ошибка, чтобы прервать выполнение кода и попасть в catch
      throw new Error();
    })
    .then(onSuccess)
    .catch(onError)
    .finally(onFinally);
};

export { getDataFromServer, sendDataOnServer };
