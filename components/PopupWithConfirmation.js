import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._formElement = this._popup.querySelector(".popup__formConfirm");
    console.log("2.-" + this._formElement);
    //this._handleSubmitCallback = handleSubmitCallback;
  }
  openPopup() {
    super.openPopup();
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }

  setEventListeners() {
    console.log("1.-" + this._formElement);
    this._formElement.addEventListener("submit", (evt) => {
      console.log("click");
      evt.preventDefault();
      // this._handleSubmitCallback();
    });

    super.setEventListeners();
  }
}

export default PopupWithConfirmation;
