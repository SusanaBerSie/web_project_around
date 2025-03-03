// CONTROLADORES DE EVENTOS Y FUNCIÓN ABRE Y CIERRA popups

function keyPressEsc(evt) {
  if (evt.key === "Escape") {
    closePopups(popupCard);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", keyPressEsc);
}

function closePopups() {
  document.removeEventListener("keydown", keyPressEsc);
  popupProfile.classList.remove("popup_opened");
  popupImage.classList.remove("popup_opened");
  popupCard.classList.remove("popup_opened");
}

_removeCard (_nodeTrash) {
  _nodeTrash.addEventListener("click", function () {
    Card.remove();
});
}

_likeCard (_nodeLike) {
  _nodeLike.addEventListener("click", function () {
  _nodeLike.classList.toggle("element__icon-like_active");
  });
}

_zoomCard (_templateCard) { //debería tener parámetros?
  nodeImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupImage.querySelector(".popup__photo").src = _link;
    popupImage.querySelector(".popup__photo").alt = _name;
    popupImage.querySelector(".popup__photo-title").textContent = _name;
  });
}

const overlays = document.querySelectorAll(".popup__overlay");
overlays.forEach(function (overlay) {
  overlay.addEventListener("click", closePopups);
});

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

export {utils};