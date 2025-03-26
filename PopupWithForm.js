/*Crea PopupWithForm como una clase secundaria de Popup.

- Lleva un callback del envío del formulario al constructor, así como el selector popup.
*/

import { popupProfile, popupImage, popupCard} from "./utils";

class PopupWithForm extends Popup {
  constructor (popupSelector, formElement, inputSelector) {//formElement e inputSelector repetidos de constructor de FormValidator
    super(popupSelector);
    this.formElement = formElement;
    this.inputSelector = inputSelector;
  }}

  //recopila datos de todos los campos de entrada
  //se REPITE variable inputList de FormValidator
  _getInputValues() {
    const inputList = Array.from(this.formElement.querySelectorAll(this.inputSelector));
  }

  //agrega al formulario un controlador de eventos submit y el detector de eventos click en el icono para cerrar.
  setEventListeners() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners(formElement);
    //_handleEscClose en popup.js
  }

// Modifica el método padre close() para reiniciar el formulario una vez se cierre el popup.
closePopups(formElement) {
  formElement.reset();
}

//Crea una instancia de la clase PopupWithForm para cada popup.
const popupProfile = new PopupWithForm(popupProfile);
const popupImage = new PopupWithForm(popupImage);
const popupCard = new PopupWithForm(popupCard);