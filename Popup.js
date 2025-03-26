/*Crea la clase Popupque abre y cierra la ventana emergente, según los siguientes requisitos:

El constructor tiene un solo parámetro, que es el selector popup.
Almacena los métodos públicos open() y close() que abrirán y cerrarán el popup.
Almacena un método privado llamado _handleEscClose() que almacena la lógica para cerrar el popup al pulsar la tecla Esc.
Almacena un método público llamado setEventListeners() que agrega un detector de eventos de click al icono para cerrar el popup.
La ventana modal también debe cerrarse cuando los usuarios hacen clic en el área sombreada del formulario.*/

import {
  popupCard,
  popupProfile,
  popupImage,
  closeButtons,
  overlays,
} from "./utils.js";

class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(popupSelector);
  }

  openPopup(popup) {
    popup.classList.add(".popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopups();
    }
    return _handleEscClose();
  }

  closePopups(popup) {
    popup.classList.remove(".popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
    /* popupProfile.classList.remove(this.popupSelector);
    popupImage.classList.remove(this.popupSelector);
    popupCard.classList.remove(this.popupSelector); */
  }

  setEventListeners() {
    closeButtons.addEventListener("click", () => {
      closeButtons.classList.remove(this.popupSelector);
    });
    overlays.addEventListener("click", () => {
      overlays.classList.remove(this.popupSelector);
    });
  }
}
export default Popup;
