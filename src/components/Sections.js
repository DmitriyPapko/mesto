export default class Sections {
    constructor({items, renderer}, containerSelector){
        this._renderedItems = items;
        this._renderer = renderer; 
        this._containerSelector = containerSelector;
    }

    renderItems(){
        this._renderedItems.forEach(item => 
            this._renderer(item)
        )
    }


    addItem(e){
        this._containerSelector.prepend(e);
    }
   
}