/*import { inputTitle, inputUrl, jobProfile, nameProfile } from "./utils";*/
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
    // this._formElement.reset();
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
    console.log(formValues);
    return formValues;
  }

  //indica que hacer con los datos del usuario recopilados.
  //se ejecuta evento submit, se llama a _getInputValues, los datos se pasan a la funcion
  // callback especificada y se actualiza el perfil con los nuevos valores
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
