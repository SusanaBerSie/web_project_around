import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._formElement = this._popup.querySelector(".popup__formConfirm");
    this._confirmButton = this._popup.querySelector(".popup__button-item");
    //this._handleSubmitCallback = handleSubmitCallback;
  }

  openPopup() {
    super.openPopup();
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    super.setEventListeners();

    if (this._formElement) {
      this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
        // this._handleSubmitCallback();
        if (this._handleSubmitCallback) {
          this._handleSubmitCallback();
        }
      });
    }
  }
}

export default PopupWithConfirmation;
