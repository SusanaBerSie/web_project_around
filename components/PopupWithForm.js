import Popup from "../components/Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._callback = submitCallback;
    this._formElement = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
    this._submitButton = this._formElement.querySelector(".popup__button-item");
  }

  openPopup() {
    super.openPopup();
  }

  closePopups() {
    super._closePopups;
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
  }

  //establecer el texto del boton de envío
  setSubmitButtonText(text) {
    if (this._submitButton) {
      this._submitButton.textContent = text;
    }
  }

  //mostrar texto de carga
  renderLoading(
    isLoading,
    loadingText = "Guardando...",
    defaultText = "Guardar"
  ) {
    if (this._submitButton) {
      this._submitButton.textContent = isLoading ? loadingText : defaultText;
    }
  }

  //recopila datos de todos los campos de entrada de los formularios
  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  //Establecer valores en el formulario
  setInputValues(data) {
    this._inputList.forEach((input) => {
      if (data[input.name]) {
        input.value = data[input.name];
      }
    });
  }

  //indica que hacer con los datos del usuario recopilados.
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
    });
  }
}
export default PopupWithForm;
