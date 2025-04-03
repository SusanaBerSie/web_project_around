import Popup from "./Popup.js";
const buttonEditProfile = document.querySelector(".profile__info-edit");
const buttonAddCard = document.querySelector(".profile__add-button");
export const popupCard = document.querySelector(".popup__card");
export const popupProfile = document.querySelector(".popup_profile");
export const nameProfile = document.querySelector(".profile__info-name");
export const jobProfile = document.querySelector(".profile__info-subtitle");
export const inputName = document.querySelector("#nameInput");
export const inputAboutme = document.querySelector("#aboutmeInput");
export const inputTitle = document.querySelector("#photoTitleInput");
export const inputUrl = document.querySelector("#photoUrlInput");

const handlerButtonProfile = () => {
  openPopup(popupProfile);
  inputName.value = nameProfile.textContent;
  inputAboutme.value = jobProfile.textContent;
};

buttonEditProfile.addEventListener("click", handlerButtonProfile);

buttonAddCard.addEventListener("click", () => {
  openPopup(popupCard);
});
