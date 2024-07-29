// const open = document.getElementById("open-edit-profile");
// const popup = document.getElementById("popup");
// const close = document.getElementById("close-edit-profile");

// open.addEventListener("click", () => {
//   popup.classList.add("show");
// });

// close.addEventListener("click", () => {
//   popup.classList.remove("show");
// });

// let open = document.querySelector(".profile__info-edit");
// let popup = document.querySelector(".popup");
// let close = document.querySelector(".popup__add-button");
// function showClick() {}

//const openPopup = document.querySelector(".profile__info-edit");

/*
openPopup.addEventListener("click", () => {
  openPopup.classList.add("popup--show");
});
*/

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
