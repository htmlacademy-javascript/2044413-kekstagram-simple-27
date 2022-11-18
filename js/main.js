// main.js - это точка входа. Модуль, который связывает другие модули
// Задача точки входа — подключить и настроить всё, что нужно для работы страницы или даже целого приложения
import { picturesRendering } from './pictures-rendering.js';
import { setListenerFileUpload } from './form.js';
import { errorMessage } from './modal-messages.js';
import { getDataFromServer } from './api.js';

// выполним запрос к серверу
getDataFromServer(
  (photos) => picturesRendering(photos),
  () => errorMessage('Ошибка загрузки изображений', 'Продолжить'),
);

setListenerFileUpload();
