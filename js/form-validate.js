const uploadPictureFormElement = document.querySelector('.img-upload__form');

const pristine = new Pristine(uploadPictureFormElement, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'form__error'
});

const onFormValidate = function(evt) {
  if (!pristine.validate()) {
    evt.preventDefault();
    return false;
  }

  return true;
};

const resetValidation = function() {
  pristine.reset();
};

export { onFormValidate, resetValidation };
