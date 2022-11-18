// util.js - это модуль, где находятся вспомогательные функции

// Функция, которая принимает объект событий и возвращает либо true, либо false в зависимости от того Escape это или не Escape
function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

export { isEscapeKey };
