/* import {
  handlerButtonProfile,
  buttonEditProfile,
  closeButtons,
} from "./script.js";*/

//abrir popup
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyPressEsc);
};

/*//cerrar popup
const closePopups = () => {
  document.removeEventListener("keydown", keyPressEsc);
  popupProfile.classList.remove("popup_opened");
  popupImage.classList.remove("popup_opened");
  popupCard.classList.remove("popup_opened");
};

//closeButtonn declarado en script.js
closeButtons.forEach((button) => {
  button.addEventListener("click", closePopups);
});

//1//buttonEditProfile declarado en script.js
buttonEditProfile.addEventListener("click", handlerButtonProfile);

//2
overlays.forEach((overlay) => {
  overlay.addEventListener("click", closePopups);
});

formCard.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputTitle.value && inputUrl.value) {
    const card = new Card(inputTitle.value, inputUrl.value);
    elementsSection.prepend(card.renderCards);
    formCard.reset();
    closePopups();
  }
});

formProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputName.value && inputAboutme.value) {
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputAboutme.value;
    closePopups();
  }
});

buttonAddCard.addEventListener("click", () => {
  openPopup(popupCard);
});

const keyPressEsc = (evt, action) => {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".popup_opened");
    action(activePopup);
  }
};

const handlerKeyPressScape = (evt) => {
  evt.preventDefault();
  keyPressEsc(evt, closePopups);
};
 /*closePopups*/

export { openPopup };
