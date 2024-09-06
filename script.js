const buttonEditProfile = document.querySelector(".profile__info-edit");
const buttonAddCard = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_profile");
const closeButtons = document.querySelectorAll(".popup__add-button");
const nameProfile = document.querySelector(".profile__info-name");
const jobProfile = document.querySelector(".profile__info-subtitle");
const formProfile = popupProfile.querySelector(".popup__form-profile");
const inputName = formProfile.querySelector(".popup__form-item_name");
const inputAboutme = formProfile.querySelector(".popup__form-item_aboutme");
const popupCard = document.querySelector(".popup__card");
const inputTitle = document.querySelector(".popup__form-item_title");
const inputUrl = document.querySelector(".popup__form-item_url");
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

function generateCard(name, link) {
  const templateCard = document
    .querySelector(".card-template")
    .content.querySelector(".element");
  const card = templateCard.cloneNode(true);
  const nodeImage = card.querySelector(".element__image");
  const nodeText = card.querySelector(".element__title");
  const nodeTrash = card.querySelector(".element__icon-trash");
  const nodeLike = card.querySelector(".element__icon-like");
  nodeImage.alt = name;
  nodeImage.src = link;
  nodeText.textContent = name;
  nodeTrash.addEventListener("click", function () {
    card.remove();
  });
  nodeLike.addEventListener("click", function () {
    nodeLike.classList.toggle("element__icon-like_active");
  });
  nodeImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupImage.querySelector(".popup__photo").src = link;
    popupImage.querySelector(".popup__photo").alt = name;
    popupImage.querySelector(".popup__photo-title").textContent = name;
  });
  return card;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopups() {
  popupProfile.classList.remove("popup_opened");
  popupImage.classList.remove("popup_opened");
  popupCard.classList.remove("popup_opened");
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

buttonAddCard.addEventListener("click", function () {
  openPopup(popupCard);
});

formCard.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputTitle.value && inputUrl.value) {
    const card = generateCard(inputTitle.value, inputUrl.value);
    elementsSection.prepend(card);
    formCard.reset();
    closePopups();
  }
});

initialCards.forEach(function (element) {
  const card = generateCard(element.name, element.link);
  elementsSection.append(card);
});
