const buttonEditProfile = document.querySelector(".profile__info-edit");
const closeButtons = document.querySelectorAll(".popup__add-button");
const overlays = document.querySelectorAll(".popup__overlay");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupCard = document.querySelector(".popup__card");
export const popupProfile = document.querySelector(".popup_profile");
export const nameProfile = document.querySelector(".profile__info-name");
export const jobProfile = document.querySelector(".profile__info-subtitle");
export const inputName = document.querySelector("#nameInput");
export const inputAboutme = document.querySelector("#aboutmeInput");
export const inputTitle = document.querySelector("#photoTitleInput");
export const inputUrl = document.querySelector("#photoUrlInput");
export const popupImage = document.querySelector(".popup__image");

const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyPressEsc);
};

const handlerButtonProfile = () => {
  openPopup(popupProfile);
  inputName.value = nameProfile.textContent;
  inputAboutme.value = jobProfile.textContent;
};

export const closePopups = () => {
  document.removeEventListener("keydown", keyPressEsc);
  popupProfile.classList.remove("popup_opened");
  popupImage.classList.remove("popup_opened");
  popupCard.classList.remove("popup_opened");
};

closeButtons.forEach((button) => {
  button.addEventListener("click", closePopups);
});

buttonEditProfile.addEventListener("click", handlerButtonProfile);

overlays.forEach((overlay) => {
  overlay.addEventListener("click", closePopups);
});

buttonAddCard.addEventListener("click", () => {
  openPopup(popupCard);
});

const keyPressEsc = (evt) => {
  if (evt.key === "Escape") {
    const exitPopup = document.querySelector(".popup_opened");
    closePopups(exitPopup);
  }
};

export { openPopup };
