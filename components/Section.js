class Section {
  constructor({ items, renderer }, elementsContainerSelector) {
    this.items = items;
    this.renderer = renderer;
    this.elementContainer = document.querySelector(elementsContainerSelector);
  }

  //renderizar cada elemento de la página. La función renderer() renderizará cada elemento en una página.
  renderItems() {
    this.items.forEach((item) => {
      this.renderer(item);
    });
  }

  //toma elemento del DOM y lo agrega en el contenedor
  addItem(element) {
    this.elementContainer.prepend(element);
  }
}
export default Section;
