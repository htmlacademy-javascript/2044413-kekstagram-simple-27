// data.js - это модуль, который создает данные

import {getRandomInteger} from './util.js';

// создаем массив с описанием фотографий
const PHOTO_DESCRIPTION_LIST = [
  'Отель на берегу',
  'Дорога на пляж',
  'Пляж на берегу океана',
  'Рисовые человечки',
  'Авто будущего',
  'Вкусный завтрак',
  'Ягодный напиток',
];

// создаем функцию, которая будет генерировать(создавать) объект
const generatePhotoData = function (value) {
  return {
    id: value,
    url: `photos/${value}.jpg`,
    description: PHOTO_DESCRIPTION_LIST[getRandomInteger(0, PHOTO_DESCRIPTION_LIST.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200),
  };
};

// создаем функцию, которая будет генерировать(создавать) 25 объектов(список объектов)
const generatePhotoDataList = function () {
  const list = [];

  for (let i = 1; i <= 25; i++) {
    const photoData = generatePhotoData(i);
    list.push(photoData);
  }

  return list;
};

export {generatePhotoDataList};
