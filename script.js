const buttonEditProfile = document.querySelector(".profile__info-edit");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_profile");
const closeButtons = document.querySelectorAll(".popup__add-button");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-subtitle");
const formProfile = popupProfile.querySelector(".popup__form-profile");
const inputName = formProfile.querySelector(".popup__form-item_name");
const inputAboutme = formProfile.querySelector(".popup__form-item_aboutme");
const popupCard = document.querySelector(".popup_card");
const inputTitle = document.querySelector(".popup__form-item_title");
const inputUrl = document.querySelector(".popup__form-item_url");
const titleCard = document.querySelector(".element__title");
const imageCard = document.querySelector(".element__image");
const formCard = document.querySelector(".popup__form-card");
const resetCard = document.querySelector(".element__icon-trash");

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

//añadir foto
buttonAddCard.addEventListener("click", function () {
  openPopup(popupCard);
  inputTitle.value = titleCard.textContent;
  inputUrl.value = imageCard.getAttribute("src");
});

//al oprimir 'guardar' se cierre el popup y se agregue la tarjeta de primeras
formCard.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputTitle.value && inputUrl.value) {
    titleCard.textContent = inputTitle.value;
    imageCard.getAttribute = inputUrl;
    closePopups();
  }
  const cardBox = document.querySelector(".element");
  cardBox.append(titleCard, imageCard);
  initialCards.append(cardBox);
});

//Eliminar foto
resetCard.addEventListener("click", function () {
  Element.forEach((item) => {
    item.remove();
  });
});

//Ventana emergente de las fotos
