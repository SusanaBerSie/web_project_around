/*function generateCard(name, link) {
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
}*/
