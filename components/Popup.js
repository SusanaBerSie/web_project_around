class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _closePopups() {
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
    closeButtons.addEventListener("click", () => {
      this._closePopups();
    });

    const overlay = this._popup.querySelector(".popup__overlay");
    overlay.addEventListener("click", () => this._closePopups());
  }
}
export default Popup;
