/*Toma los datos de la tarjeta (tanto el texto como un enlace a la imagen)
y un selector de elemento de plantilla como parámetros en el constructor.
Dispone de métodos privados para trabajar con el marcado y añadir detectores de eventos.
Tiene métodos privados para cada controlador de eventos.
Tiene un método público que devuelve un elemento card completamente funcional y lleno de datos.
Crea una instancia de la clase Card para cada tarjeta.*/

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

    return card;
  }

  renderCards() {
    const renderCard = this._getTemplate();
    return renderCard;
  }

  /*  generateCard(name, link) {
    return this._templateSelector;
  } */

  /* function generateCard(name, link) {
    const templateCard = document
      .querySelector(".card-template") */
}

export default Card;
