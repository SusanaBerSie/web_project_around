class Popup {
  constructor(popupSelector) {
    console.log(popupSelector);

    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    console.log("Entre a la clase base");
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _closePopups() {
    console.log("this._popup");
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this._closePopups();
    }
  }

  setEventListeners() {
    const closeButtons = this._popup.querySelector(".popup__X-button");
    console.log(closeButtons);
    closeButtons.addEventListener("click", () => {
      console.log("Clicl a la X");
      this._closePopups();
    });

    const overlay = this._popup.querySelector(".popup__overlay");
    overlay.addEventListener("click", () => this._closePopups());
  }
}
export default Popup;
