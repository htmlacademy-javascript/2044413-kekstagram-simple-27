// main.js - это точка входа. Модуль, который связывает другие модули
// Задача точки входа — подключить и настроить всё, что нужно для работы страницы или даже целого приложения
import { picturesRendering } from './picturesRendering.js';
import { closeForm, setUserFormSubmit } from './workWithForm.js';
import { errorMessage } from './modalMessages.js';
// import { generatePhotoDataList } from './data.js';
import './workWithForm.js';
import './scaleEditing.js';
import './effects.js';
import './api.js';
import { getDataFromServer } from './api.js';

// const photoDataList = generatePhotoDataList();
// console.log(photoDataList);
// picturesRendering(photoDataList);

// выполним запрос к серверу(для Module11-task1)
getDataFromServer(
  (photos) => picturesRendering(photos),
  () => errorMessage('Ошибка загрузки изображений', 'Продолжить'),
);
// Вынесла запрос данных в отдельный модуль
// fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
//   .then((response) => response.json())
//   .then((photos) => {
//     picturesRendering(photos);
//   })
//   .catch(() => {
//     errorMessage('Ошибка загрузки изображений', 'Продолжить');
//   });

setUserFormSubmit(closeForm);
