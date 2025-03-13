/* Crea la clase FormValidator, que establece la configuración para validar los campos
del formulario de acuerdo con los siguientes requisitos:

- Tu constructor tiene dos parámetros. El primer parámetro es un objeto de configuración
que almacena los selectores y las clases del formulario, y el segundo toma un elemento
del formulario a validar.
- Tiene métodos privados para procesar el formulario, que incluyen:
comprobar la validez del campo, cambiar el estado del botón Submit, y agregar
todos los controladores necesarios.
- Tiene un método público enableValidation(), que activa la validación del formulario.
- Crea una instancia de la clase FormValidator para cada formulario que deba ser validado.
 */

class FormValidator {
  constructor(
    {
      formSelector,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass,
    },
    formElement
  ) {
    this._formSelector = formSelector;
    this._inputSelector = inputSelector;
    this._submitButtonSelector = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._formElement = formElement;
  }

  _setEventListeners = () => {
    const button = this._formElement.querySelector(this._submitButtonSelector);
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._buttonActive(button, inputList);
      });
    });
    this._buttonActive(button, inputList);
  };

  enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners(formElement);
    });
  };

  showInputError = (inputElement, errorMessage) => {
    const inputError = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    console.log("Input ID:", inputElement.id);
    console.log("Looking for error element:", `.${inputElement.id}-error`);
    console.log("Found error element:", inputError);
    console.log("Error message:", errorMessage);
    console.log("error class to add:", this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
    inputError.textContent = errorMessage;
    console.log("setting error texto to:", errorMessage);
    inputError.classList.add(this._errorClass);
    console.log("Error element after class added:", inputError.outerHTML);
  };

  hideInputError = (inputElement) => {
    const inputError = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    inputError.classList.remove(this._errorClass);
    inputError.textContent = "";
  };

  _buttonActive = (button, inputList) => {
    const valid = inputList.every((input) => input.validity.valid);
    if (!valid) {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    }
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  };
}

export default FormValidator;
