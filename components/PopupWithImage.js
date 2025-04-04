class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
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
}

export default PopupWithImage;
