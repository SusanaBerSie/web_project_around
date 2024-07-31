const buttonEditProfile = document.querySelector(".profile__info-edit");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_profile");
const closeButtons = document.querySelectorAll(".popup__add-button");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-subtitle");
const formProfile = popupProfile.querySelector(".popup__form");
const inputName = formProfile.querySelector(".popup__form-item_name");
const inputAboutme = formProfile.querySelector(".popup__form-item_aboutme");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopups() {
  popupProfile.classList.remove("popup_opened");
}

buttonEditProfile.addEventListener("click", function () {
  openPopup(popupProfile);
  inputName.value = nameProfile.textContent;
  inputAboutme.value = jobProfile.textContent;
});

closeButtons.forEach(function (button) {
  button.addEventListener("click", closePopups);
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputName.value && inputAboutme.value) {
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputAboutme.value;
    closePopups();
  }
});
