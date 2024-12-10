const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  formConfig
) => {
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formConfig.inputErrorClass);
  inputError.textContent = errorMessage;
  inputError.classList.add(formConfig.errorClass);
};

const hideInputError = (formElement, inputElement, formConfig) => {
  const inputError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formConfig.inputErrorClass);
  inputError.classList.remove(formConfig.errorClass);
  inputError.textContent = "";
};

const checkInputValidity = (formElement, inputElement, formConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formConfig
    );
  } else {
    hideInputError(formElement, inputElement, formConfig);
  }
};

const setEventListeners = (formElement, formConfig) => {
  const button = formElement.querySelector(formConfig.submitButtonSelector);
  const inputList = Array.from(
    formElement.querySelectorAll(formConfig.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, formConfig);
      buttonActive(button, inputList, formConfig);
    });
  });
  buttonActive(button, inputList, formConfig);
};

const buttonActive = (button, inputList, formConfig) => {
  const valid = inputList.every((input) => input.validity.valid);
  if (!valid) {
    button.classList.remove(formConfig.inactiveButtonClass);
    button.disabled = true;
  } else {
    button.classList.add(formConfig.inactiveButtonClass);
    button.disabled = false;
  }
};

const enableValidation = (formConfig) => {
  const formList = Array.from(
    document.querySelectorAll(formConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, formConfig);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-item",
  inactiveButtonClass: "popup__button-item_active",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
