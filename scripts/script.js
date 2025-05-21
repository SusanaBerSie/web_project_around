import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

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
  buttonNewPhotoProfile,
  popupNewPhotoProfile,
} from "../components/utils.js";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1/",
  headers: {
    authorization: "55fccc8a-cf9c-4f13-a85d-ecd74e12c690",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(".profile__info-name", ".profile__info-subtitle");

//popup del Perfil
const profilePopup = new PopupWithForm(".popup_profile", (formData) => {
  profilePopup.renderLoading(true);
  api
    .editProfile(formData.name, formData.aboutme)
    .then((userData) => {
      userInfo.setUserInfo(userData.name, userData.about);
      profilePopup._closePopups();
    })
    .catch((error) => {
      console.error("Error al actualizar el perfil:", error);
    })
    .finally(() => {
      profilePopup.renderLoading(false);
    });
});

//popup de tarjeta
const cardPopup = new PopupWithForm(".popup__card", (formData) => {
  cardPopup.renderLoading(true);
  api
    .addNewCard(formData.title, formData.url)
    .then((cardData) => {
      const cardElement = addCard(cardData);
      cardSection.addItem(cardElement);
      cardPopup._closePopups();
    })
    .catch((error) => {
      console.error("Error al añadir tarjeta:", error);
    })
    .finally(() => {
      cardPopup.renderLoading(false);
    });
});

//popup NewPhotoProfile
const newPhotoProfilePopup = new PopupWithForm(
  ".popup__newPhotoProfile",
  (formData) => {
    newPhotoProfilePopup.renderLoading(true);
    api.switchPhotoProfile(formData.link);
    then((userData) => {
      userInfo.setUserInfo(userData.link);
      popupNewPhotoProfile._closePopups();
    })
      .catch((error) => {
        console.error("Error al actualizar la foto perfil:", error);
      })
      .finally(() => {
        newPhotoProfilePopup.renderLoading(false);
      });
  }
);

//popup confirmar eliminación de tarjetas
const deleteCardPopup = new PopupWithConfirmation(".popup__confirm");
deleteCardPopup.setEventListeners();

profilePopup.setEventListeners();
cardPopup.setEventListeners();
newPhotoProfilePopup.setEventListeners();

//abrir el popup de edición del perfil
buttonEditProfile.addEventListener("click", () => {
  const currentUserInfo = userInfo.getUserInfo();
  inputName.value = currentUserInfo.name;
  inputAboutme.value = currentUserInfo.job;
  profilePopup.openPopup();
});

//abrir el popup de añadir tarjeta
buttonAddCard.addEventListener("click", () => {
  cardPopup.openPopup();
});

//abrir el popup para cambiar foto de perfil
buttonNewPhotoProfile.addEventListener("click", () => {
  newPhotoProfilePopup.openPopup();
});

//configuración de validación
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

//función para crear instancias de tarjetas
function addCard(item) {
  const card = new Card(
    item,
    ".card-template",
    () => {},
    (card) => {
      const deleteCardPopup = new PopupWithConfirmation(".popup__formConfirm");
      deleteCardPopup.setEventListeners();
      deleteCardPopup.openPopup();
    },
    (cardId, isLiked) => {
      api.changeLikeCardStatus(cardId, isLiked);
    }
  );
  return card.renderCards();
}

//variable para almacenar la instancia de la seccion de tarjetas
let cardSection;

//cargar la información del usuario y las tarjetas iniciales

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo(userData.name, userData.about);
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
  })
  .catch((error) => {
    console.error("Error al cargar los datos iniciales:", error);
  });

const formProfileValidator = new FormValidator(validationConfig, formProfile);
formProfileValidator.enableValidation();
const formCardValidator = new FormValidator(validationConfig, formCard);
formCardValidator.enableValidation();

/*

(([userData, initialCards])=>{
  userInfo.setUserInfo(userData.name, userData.about);
  api.getInitialCards().then((initialCards) => {
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
});

//CAMBIAR FOTO DE PERFIL
const newPhotoProfile = new PopupWithForm(
  ".popup__newPhotoProfile",
  (formData) => {
    const card = { link: formData.url };
    const cardElement = addCard(card);
    cardSection.addItem(cardElement);
    cardPopup._closePopups();
  }
);
const popup = document.querySelector(".popup");

api.getUserInfo().then((user) => {
  console.log(user);
});

formProfile.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputName.value && inputAboutme.value) {
    nameProfile.textContent = inputName.value;
    jobProfile.textContent = inputAboutme.value;
    profilePopup._closePopups();
  }
}); */
