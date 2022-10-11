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
  if (toValue <= fromValue) {
    return NaN;
  }

  const randomValue = fromValue + Math.random() * (toValue - fromValue);

  return Math.round(randomValue);
}

// eslint-disable-next-line no-console
console.log(getRandomInteger(0, 1000));


// ДЗ Module2-task1-function2.
// ФУНКЦИЯ ДЛЯ ПРОВЕРКИ МАКСИМАЛЬНОЙ ДЛИНЫ СТРОКИ.БУДЕТ ИСПОЛЬЗОВАТЬСЯ ДЛЯ ПРОВЕРКИ ДЛИНЫ ВВЕДЕННОГО КОММЕНТАРИЯ,НО ДОЛЖНА БЫТЬ УНИВЕРСАЛЬНА.
// НАПИСАН МОЙ ВАРИАНТ ЭТОЙ ФУНКЦИИ.
// const checkMaxLineLenght = function (checkingString, maxLenght) {
//   if (checkingString.length > maxLenght) {
//     return false;
//   } else {
//     return true;
//   }
// };

// НАПИСАН ВАРИАНТ ЭТОЙ ЖЕ ФУНКЦИИ ПРЕПОДАВАТЕЛЕМ.(ЭТОТ ВАРИАНТ НАПИСАНИЯ ПРАВИЛЬНЫЙ)
// eslint-disable-next-line no-unused-vars
function checkMaxLineLength(checkingString, maxLength) {
  return checkingString.length < maxLength;
}

// eslint-disable-next-line no-console, no-undef
console.log(checkMaxLineLenght('Hello', 500));
