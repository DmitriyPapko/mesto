export default class Sections {
    constructor({ items, renderer }, containerElement) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerElement = containerElement;
    }

    renderItems(cards) {
       return cards.forEach((item) =>{
        this._renderer(item)
    }
       ) 
    }

    addItem(element) { 
        this._containerElement.prepend(element);
    }

}