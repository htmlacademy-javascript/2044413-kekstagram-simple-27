// util.js - это модуль, где находятся вспомогательные функции

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
  // ИЛИ(ПО ЗАДАНИЮ) МЫ МОЖЕМ ПРОВЕРИТЬ, КАКОЙ ИЗ АРГУМЕНТОВ БОЛЬШЕ, А КАКОЙ МЕНЬШЕ, И ПРИ НЕОБХОДИМОСТИ ПОМЕНЯТЬ ИХ МЕСТАМИ.
  if (toValue < fromValue) {
    const tempValue = toValue;
    toValue = fromValue;
    fromValue = tempValue;
  }

  const randomValue = fromValue + Math.random() * (toValue - fromValue);

  return Math.round(randomValue);
}

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

// Функция, которая принимает объект событий и возвращает либо true, либо false в зависимости от того Escape это или не Escape
function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

export {getRandomInteger, checkMaxLineLength, isEscapeKey};
