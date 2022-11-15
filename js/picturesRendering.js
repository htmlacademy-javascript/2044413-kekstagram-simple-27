// picturesRendering.js - это модуль, которный отвечает за отрисовку миниатюр.

const picturesRendering = function (photoDataList) {
  // Найдем шаблон для миниатюр
  const pictureTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  // Создадим контейнер для будущих картинок
  const picturesFragment = document.createDocumentFragment();

  photoDataList.forEach(({ url, comments, likes }) => {
    const cloneElement = pictureTemplate.cloneNode(true);

    cloneElement.querySelector('.picture__img').src = url;
    cloneElement.querySelector('.picture__comments').textContent = comments;
    cloneElement.querySelector('.picture__likes').textContent = likes;

    picturesFragment.appendChild(cloneElement);
  });

  const picturesBlock = document.querySelector('.pictures');
  picturesBlock.appendChild(picturesFragment);
};

export { picturesRendering };
