/*Crea la clase Popupque abre y cierra la ventana emergente, según los siguientes requisitos:

El constructor tiene un solo parámetro, que es el selector popup.
Almacena los métodos públicos open() y close() que abrirán y cerrarán el popup.
Almacena un método privado llamado _handleEscClose() que almacena la lógica para cerrar el popup al pulsar la tecla Esc.
Almacena un método público llamado setEventListeners() que agrega un detector de eventos de click al icono para cerrar el popup.
La ventana modal también debe cerrarse cuando los usuarios hacen clic en el área sombreada del formulario.*/

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose;
  }

  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopups() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopups();
    }
  }

  setEventListeners() {
    const closeButtons = document.querySelectorAll(".popup__add-button");
    closeButtons.addEventListener("click", () => this.closePopups());

    const overlays = document.querySelectorAll(".popup__overlay");
    overlays.addEventListener("click", () => this.closePopups());
  }
}
export default Popup;
