import Popup from "../components/Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = document.querySelector(popupSelector);
    this._image = this._popup.querySelector(".popup__photo");
    this._title = this._popup.querySelector(".popup__photo-title");
  }

  //añade una imagen al popup con su correspondiente atributo y titulo
  openPopup(imageLink, imageTitle) {
    this._image.src = imageLink;
    this._image.alt = imageTitle;
    this._title.textContent = imageTitle;

    super.openPopup();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.closePopups();
    });
  }
}

export default PopupWithImage;
