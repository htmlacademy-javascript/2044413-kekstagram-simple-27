// main.js - это точка входа. Модуль, который связывает другие модули
// Задача точки входа — подключить и настроить всё, что нужно для работы страницы или даже целого приложения
import { checkMaxLineLength } from './util.js';
import { generatePhotoDataList } from './data.js';
import './picturesRendering.js';
import './workWithForm.js';

// eslint-disable-next-line no-console
console.log(checkMaxLineLength('Hello, JavaScript!', 10));

const photoDataList = generatePhotoDataList();
// eslint-disable-next-line no-console
console.log(photoDataList);
