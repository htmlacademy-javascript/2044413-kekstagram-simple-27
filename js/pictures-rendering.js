// picturesRendering.js - это модуль, которный отвечает за отрисовку миниатюр.

const picturesRendering = (photoDataList) => {
  // Найдем шаблон для миниатюр
  const pictureTemplateElement = document.querySelector('#picture')
    .content
    .querySelector('.picture');

  // Создадим контейнер для будущих картинок
  const pictureListFragment = document.createDocumentFragment();

  photoDataList.forEach(({ url, comments, likes }) => {
    const newPictureElement = pictureTemplateElement.cloneNode(true);

    newPictureElement.querySelector('.picture__img').src = url;
    newPictureElement.querySelector('.picture__comments').textContent = comments;
    newPictureElement.querySelector('.picture__likes').textContent = likes;

    pictureListFragment.appendChild(newPictureElement);
  });

  const picturesListСontainerElement = document.querySelector('.pictures');
  picturesListСontainerElement.appendChild(pictureListFragment);
};

export { picturesRendering };
