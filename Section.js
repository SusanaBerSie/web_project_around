//presentar lista de elementos en la página

/*Contiene un objeto con dos propiedades (items y renderer) como el primer parámetro
del constructor. La propiedad items funciona como un array de datos, que debes añadir
a una página cuando se inicializa la clase. La propiedad rendereres la función
responsable de crear y renderizar los datos en una página.
- El segundo parámetro debe ser un selector de clase CSS donde vas a agregar los
elementos de la tarjeta.*/
class Section {
  constructor({ items, renderer }, elementsContainerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.elementContainer = document.querySelector(elementsContainerSelector);
  }

  //renderizar cada elemento de la página. La función renderer() renderizará cada elemento en una página.
  renderItems() {
    this.items.forEach((item) => {
      this.renderer(item); //abajo callback
      /* (item) => {
    const card = new Card(item, ".card-template");
    const cardElement = card.renderCards();
    cardSection.addItem(cardElement); */
    });
  }

  //toma elemento del DOM y lo agrega en el contenedor
  addItem(element) {
    elementContainer.prepend(element);
  }
}
export default Section;
