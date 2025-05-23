import PopupWithImage from "../components/PopupWithImage.js";

class Card {
  constructor(element, templateSelector, addNewCard, removeCard, cardLiked) {
    this._name = element.name;
    this._link = element.link;
    this._templateSelector = templateSelector;
    this._addNewCard = addNewCard;
    this._removeCard = removeCard;
    this._cardLiked = cardLiked;
    this._id = element._id;
    this._isLiked = element.isLiked;
  }

  getId() {
    return this._id;
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
    this.card = card;
    nodeImage.alt = this._name;
    nodeImage.src = this._link;
    nodeText.textContent = this._name;

    nodeTrash.addEventListener("click", () => {
      this._removeCard(card);
    });

    nodeLike.addEventListener("click", () => {
      this._cardLiked(this._id, this._isLiked);
      nodeLike.classList.toggle("element__icon-like_active");
      this._isLiked = !this._isLiked;
    });

    nodeImage.addEventListener("click", () => {
      const popupWithImage = new PopupWithImage(".popup__image");
      popupWithImage.setEventListeners();
      popupWithImage.openPopup(this._link, this._name);
    });

    return card;
  }

  renderCards() {
    const renderCard = this._getTemplate();
    return renderCard;
  }

  deleteCard() {
    this.card.remove();
  }
}

export default Card;
