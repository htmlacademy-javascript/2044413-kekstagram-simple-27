// ДЗ Module2-task1-function1
const getRandomInteger = function (fromValue, toValue) {
  if (fromValue < 0 || toValue < 0) {
    return NaN;
  }

  if (toValue <= fromValue) {
    return NaN;
  }

  const randomValue = fromValue + Math.random() * (toValue - fromValue);

  return Math.round(randomValue);
};

// eslint-disable-next-line no-console
console.log(getRandomInteger(0, 1000));


// ДЗ Module2-task1-function2
const checkMaxLineLenght = function (checkingString, maxLenght) {
  if (checkingString.length > maxLenght) {
    return false;
  } else {
    return true;
  }
};

// eslint-disable-next-line no-console
console.log(checkMaxLineLenght('Hello', 500));
