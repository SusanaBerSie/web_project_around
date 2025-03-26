/*Crea la clase PopupWithImage como una clase hija de Popup.
Esta clase tiene que cambiar el método padre open().

En el método open() de la clase PopupWithImage, debes añadir
una imagen al popup y el correspondiente atributo de imagen
src junto con una leyenda para la imagen.*/

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = this.Popup.querySelector(".popup__photo");
    this.title = this.Popup.querySelector(".popup__photo-title");
  }

  openPopup(imageLink, imageTitle) {
    this._image.src = imageLink;
    this._image.alt = imageTitle;
    this._title.textContent = imageTitle;

    super.openPopup();
  }
}

export default PopupWithImage;
