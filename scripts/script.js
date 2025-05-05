import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";

import {
  initialCards,
  inputAboutme,
  inputName,
  inputTitle,
  inputUrl,
  jobProfile,
  nameProfile,
  popupProfile,
  buttonEditProfile,
  buttonAddCard,
} from "../components/utils.js";

const profilePopup = new PopupWithForm(".popup_profile", (FormData) => {
  nameProfile.textContent = FormData.name;
  jobProfile.textContent = FormData.inputAboutme;
});

const cardPopup = new PopupWithForm(".popup__card", (formData) => {
  const card = { name: formData.title, link: formData.url };
  const cardElement = addCard(card);
  cardSection.addItem(cardElement);
  cardPopup._closePopups();
});

profilePopup.setEventListeners();
cardPopup.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  profilePopup.openPopup();
});

buttonAddCard.addEventListener("click", () => {
  cardPopup.openPopup();
});

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-item",
  inactiveButtonClass: "popup__button-item_active",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const elementsSection = ".elements";
const formCard = document.querySelector(".popup__form-card");
const formProfile = popupProfile.querySelector(".popup__form-profile");
const popup = document.querySelector(".popup");

function addCard(item) {
  const card = new Card(item, ".card-template");
  return card.renderCards();
}

//Crear y renderizar seccion de tarjetas
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = addCard(item);
      cardSection.addItem(cardElement);
    },
  },
  elementsSection
);

cardSection.renderItems();

formProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputName.value && inputAboutme.value) {
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputAboutme.value;
    profilePopup._closePopups();
  }
});

const formProfileValidator = new FormValidator(validationConfig, formProfile);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(validationConfig, formCard);
formCardValidator.enableValidation();
