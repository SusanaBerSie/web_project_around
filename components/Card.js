import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";

class Card {
  constructor(element, templateSelector) {
    this._name = element.name;
    this._link = element.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const templateSelector = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element");
    const card = templateSelector.cloneNode(true);
    const nodeImage = card.querySelector(".element__image");
    const nodeText = card.querySelector(".element__title");
    const nodeTrash = card.querySelector(".element__icon-trash");
    const nodeLike = card.querySelector(".element__icon-like");
    nodeImage.alt = this._name;
    nodeImage.src = this._link;
    nodeText.textContent = this._name;

    nodeTrash.addEventListener("click", () => {
      card.remove();
    });

    nodeLike.addEventListener("click", () => {
      nodeLike.classList.toggle("element__icon-like_active");
    });

    nodeImage.addEventListener("click", () => {
      const popupWithImage = new PopupWithImage(".popup__image");
      popupWithImage.openPopup(this._link, this._name);
    });

    return card;
  }

  renderCards() {
    const renderCard = this._getTemplate();
    return renderCard;
  }
}

export default Card;
