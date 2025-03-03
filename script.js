import Card from "./Card.js";
import { utils } from "./utils.js";
/*import { FormValidator } from "./FormValidator.js";*/

const buttonEditProfile = document.querySelector(".profile__info-edit");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_profile");
const closeButtons = document.querySelectorAll(".popup__add-button");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-subtitle");
const formProfile = popupProfile.querySelector(".popup__form-profile");
const inputName = document.querySelector("#name-input");
const inputAboutme = document.querySelector("#aboutme-input");
const popupCard = document.querySelector(".popup__card");
const inputTitle = document.querySelector("#photoTitle-input");
const inputUrl = document.querySelector("#photoUrl-input");
const formCard = document.querySelector(".popup__form-card");
const popupImage = document.querySelector(".popup__image");
const elementsSection = document.querySelector(".elements");

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
    name: "Montañas Calvas",
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

const formElement = document.querySelector(".popup__form");
const inputElement = document.querySelector(".popup__input");

initialCards.forEach((element) => {
  const card = new Card(element, ".card-template");
  elementsSection.append(card.renderCards());
});
