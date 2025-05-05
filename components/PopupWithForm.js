import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallback) {
    super(popupSelector);
    this._callback = submitCallback;
    this._formElement = this._popup.querySelector(".popup__form");
  }

  openPopup() {
    super.openPopup();
  }

  closePopups() {
    super._closePopups;
  }

  setEventListeners() {
    super.setEventListeners();
  }

  //recopila datos de todos los campos de entrada de los formularios
  _getInputValues() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
    const formValues = {};
    inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  //indica que hacer con los datos del usuario recopilados.
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.closePopups();
    });
  }
}
export default PopupWithForm;
