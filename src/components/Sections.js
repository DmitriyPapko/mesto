export default class Sections {
    constructor({items, renderer}, containerSelector){
        this._renderedItems = items;
        this._renderer = renderer; 
        this._containerSelector = containerSelector;
    }

    renderItems(){
        this._renderedItems.forEach(i => 
            this._renderer(i)
        )
    }


    addItem(e){
        this._containerSelector.prepend(e);
    }
   
}