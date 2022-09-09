export default class Sections {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    renderItems(cards) {
       return cards.forEach((item) =>{
        this._renderer(item)
    }
       ) 
    }

    addItem(element) { 
        this._containerSelector.prepend(element);
    }

}