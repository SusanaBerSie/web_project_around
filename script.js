import Card from "./Card.js";
import {
  inputAboutme,
  inputName,
  inputTitle,
  inputUrl,
  jobProfile,
  nameProfile,
  popupProfile,
} from "./utils.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";
import Section from "./Section.js";

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-item",
  inactiveButtonClass: "popup__button-item_active",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
const elementsSection = document.querySelector(".elements");
const formCard = document.querySelector(".popup__form-card");
const formProfile = popupProfile.querySelector(".popup__form-profile");
export const popup = document.querySelector(".popup");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "MontaÃ±as Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const cardSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".card-template");
    const cardElement = card.renderCards();
    cardSection.addItem(cardElement);
  },
  elementsSection,
});

cardSection.renderItems();

formCard.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputTitle.value && inputUrl.value) {
    const card = new Card(
      { name: inputTitle.value, link: inputUrl.value },
      ".card-template"
    );
    elementsSection.prepend(card.renderCards());
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

const formProfileValidator = new FormValidator(validationConfig, formProfile);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(validationConfig, formCard);
formCardValidator.enableValidation();
