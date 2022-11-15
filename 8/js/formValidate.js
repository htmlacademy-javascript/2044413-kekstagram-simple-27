const uploadPictureForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadPictureForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error'
});

const formValidate = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
    return false;
  }

  return true;
};

const resetValidation = () => {
  pristine.reset();
};

export { formValidate, resetValidation };
