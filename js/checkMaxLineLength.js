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
