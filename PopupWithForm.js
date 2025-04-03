import { inputTitle, inputUrl, jobProfile, nameProfile } from "./utils";

class PopupWithForm extends Popup {
  constructor (popupSelector, submitCallback) {
    super(popupSelector);
    this._callback = submitCallback;
    this._formElement = this.popup.querySelector(".popup__form");
  }}

  //recopila datos de todos los campos de entrada de los formularios
  _getInputValues() {
    const inputList = Array.from(this.formElement.querySelectorAll(".popup__input"));
    const formValues={};
    inputList.forEach(input => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  //indica que hacer con los datos del usuario recopilados.
  //se ejecuta evento submit, se llama a _getInputValues, los datos se pasan a la funcion
  // callback especificada y se actualiza el perfil con los nuevos valores
  setEventListeners() {
    super.setEventListeners;
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback(this._getInputValues());
      this.closePopups();
    });
  }

// Modifica el método padre close() para reiniciar el formulario una vez se cierre el popup.
closePopups() {
  super.closePopups;
  this.formElement.reset();
}

//Crea una instancia de la clase PopupWithForm para cada popup.
const popupProfileForm = new PopupWithForm(".popup_profile",(formData)=>{
  nameProfile.textContent = formData.name;
  jobProfile.textContent = formData.aboutme;
}
popupProfileForm.setEventListeners();
);

const popupCardForm = new PopupWithForm(".popup__card",(formData)=>{
  inputTitle.textContent = formData.title;
  inputUrl.src = formData.url;
}
popupCardForm.setEventListeners();
);