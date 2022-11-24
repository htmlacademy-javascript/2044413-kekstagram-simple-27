const imageUploadFormElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(imageUploadFormElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error'
});

const onFormValidate = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
    return false;
  }

  return true;
};

const resetValidation = () => {
  pristine.reset();
};

export { onFormValidate, resetValidation };
