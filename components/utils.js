//import PopupWithForm from "./PopupWithForm.js";
export const initialCards = [
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

export const buttonAddCard = document.querySelector(".profile__add-button");
export const buttonEditProfile = document.querySelector("#open-edit-profile");
export const popupCard = document.querySelector(".popup__card");
export const popupProfile = document.querySelector(".popup_profile");
export const nameProfile = document.querySelector(".profile__info-name");
export const jobProfile = document.querySelector(".profile__info-subtitle");
export const inputName = document.querySelector("#nameInput");
export const inputAboutme = document.querySelector("#aboutmeInput");
export const inputTitle = document.querySelector("#photoTitleInput");
export const inputUrl = document.querySelector("#photoUrlInput");
export const buttonNewPhotoProfile = document.querySelector(".profile__avatar");
export const popupNewPhotoProfile = document.querySelector(
  ".popup__newPhotoProfile"
);
