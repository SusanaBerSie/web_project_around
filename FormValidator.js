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

class FormValidator () {
  constructor (formVal, algoMas);

  _checkInputValidity (formElement, inputElement, formConfig) {  //puede ser objeto si ya es constante?
    this._formElement = formElement;
    this._inputElement = inputElement;
    /* this._formConfig = formConfig; */
    if (!_inputElement.validity.valid) {
      showInputError(
        _formElement,
        _inputElement,
        _inputElement.validationMessage,
        /*_formConfig*/
      );
    } else {
      hideInputError(_formElement, _inputElement, _formConfig);
    }
  }

  _setEventListeners (_formElement, formConfig) { //_formElement ya se pone privado?
    const button = formElement.querySelector(formConfig.submitButtonSelector); //se define con this?
    const inputList = Array.from( //se define con this?
      formElement.querySelectorAll(formConfig.inputSelector)
    );
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", function () {
        checkInputValidity(formElement, inputElement, formConfig);
        buttonActive(button, inputList, formConfig);
      });
    });
    buttonActive(button, inputList, formConfig);
   }

  _buttonActive (button, inputList, formConfig) {
    this._button = button;  //change spelling?
    this._inputList = inputList;
    /* this._formConfig = formConfig; mencionarlo nuevamente?*/

    const valid = _inputList.every((input) => input.validity.valid);
   if (!valid) {
    _button.classList.remove(formConfig.inactiveButtonClass);
    _button.disabled = true;
   } else {
    _button.classList.add(formConfig.inactiveButtonClass);
    _button.disabled = false;
   }
  }

  enableValidation = (formConfig) => {
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
}

//falta enableValidation, showInputError y hideInputError


export {FormValidator};