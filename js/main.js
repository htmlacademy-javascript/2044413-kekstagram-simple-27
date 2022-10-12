// ФУНКЦИЯ,КОТОРАЯ ВОЗВРАЩАЕТ СЛУЧАЙНОЕ ЦЕЛОЕ ЧИСЛО ИЗ ПЕРЕДАННОГО ДИАПАЗОНА ВКЛЮЧИТЕЛЬНО.
// РЕЗУЛЬТАТ:ЦЕЛОЕ ЧИСЛО ИЗ ДИАПАЗОНА "ОТ...ДО".
// АРГУМЕНТАМИ ФУНКЦИИ МОГУТ БЫТЬ ТОЛЬКО ПОЛОЖИТЕЛЬНЫЕ ЧИСЛА И НОЛЬ.ЕСЛИ ФУНКЦИИ ПРИШЛИ НЕПРАВИЛЬНЫЕ АРГУМЕНТЫ,ОНА ДОЛЖНА ВЕРНУТЬ NaN.
// ДЗ Module2-task1-function1.
function getRandomInteger(fromValue, toValue) {
  if (fromValue < 0 || toValue < 0) {
    return NaN;
  }
  // ПРИДУМАЛА,КАК ФУНКЦИЯ БУДЕТ ВЕСТИ СЕБЯ,ЕСЛИ ПЕРЕДАТЬ ЗНАЧЕНИЕ "ДО" МЕНЬШЕ,ЧЕМ ЗНАЧЕНИЕ "ОТ",ИЛИ РАВНОЕ ЕМУ.
  // ФУНКЦИЯ МОЖЕТ ВЕРНУТЬ ЗНАЧЕНИЕ NaN.
  // if (toValue <= fromValue) {
  //   return NaN;
  // }
  // ИЛИ(ПО ЗАДАНИЮ)МЫ МОЖЕМ ПРОВЕРИТЬ,КАКОЙ ИЗ АРГУМЕНТОВ БОЛЬШЕ,А КАКОЙ МЕНЬШЕ,И ПРИ НЕОБХОДИМОСТИ ПОМЕНЯТЬ ИХ МЕСТАМИ.
  if (toValue < fromValue) {
    const tempValue = toValue;
    toValue = fromValue;
    fromValue = tempValue;
  }

  const randomValue = fromValue + Math.random() * (toValue - fromValue);

  return Math.round(randomValue);
}

// eslint-disable-next-line no-console
console.log(getRandomInteger(0, 1000));


// ДЗ Module2-task1-function2.
// ФУНКЦИЯ ДЛЯ ПРОВЕРКИ МАКСИМАЛЬНОЙ ДЛИНЫ СТРОКИ.БУДЕТ ИСПОЛЬЗОВАТЬСЯ ДЛЯ ПРОВЕРКИ ДЛИНЫ ВВЕДЕННОГО КОММЕНТАРИЯ,НО ДОЛЖНА БЫТЬ УНИВЕРСАЛЬНА.
// НАПИСАН МОЙ ВАРИАНТ ЭТОЙ ФУНКЦИИ.
// const checkMaxLineLength = function (checkingString, maxLenght) {
//   if (checkingString.length > maxLenght) {
//     return false;
//   } else {
//     return true;
//   }
// };

// НАПИСАН ВАРИАНТ ЭТОЙ ЖЕ ФУНКЦИИ ПРЕПОДАВАТЕЛЕМ.(ЭТОТ ВАРИАНТ НАПИСАНИЯ ПРАВИЛЬНЫЙ)
// eslint-disable-next-line no-unused-vars
function checkMaxLineLength(checkingString, maxLength) {
  return checkingString.length <= maxLength;
}

// eslint-disable-next-line no-console, no-undef
console.log(checkMaxLineLength('Hello', 500));

// ДЗ Module4-task1 //
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
  const data = {
    id: value,
    url: `photos/${value}.jpg`,
    description: PHOTO_DESCRIPTION_LIST[getRandomInteger(0, PHOTO_DESCRIPTION_LIST.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: getRandomInteger(0, 200),
  };

  return data;
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

const photoDataList = generatePhotoDataList();
// eslint-disable-next-line no-console
console.log(photoDataList);

