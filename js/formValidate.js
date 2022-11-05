const uploadPictureForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error'
});

const commentValidate = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

const resetValidation = () => {
  pristine.reset();
};

export { commentValidate, resetValidation };
