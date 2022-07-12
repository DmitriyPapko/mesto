
import{ openPopup, zoomPopup} from './index.js'
class Card {
    constructor(item, cardTemplate){
      this._name = item.name;
      this._link = item.link;
      this._alt = item.alt;
      this._cardTemplate = cardTemplate;
    }

    _getTemplate(){
        const cardElement = document.querySelector(this._cardTemplate)
        .content.querySelector('.element')
        .cloneNode(true);
        return cardElement;

    }
    
    _addEventListeners(){
        this._card.querySelector('.element__basket')
            .addEventListener('click', this._deleteCard);
        this._card.querySelector('.element__heart')
            .addEventListener('click', this._likeCard);
        this._card.querySelector('submit',this._saveCard);        
    }
  
    _deleteCard(e){
        this._elem = e.currentTarget.closest('.element');
        this._elem.remove();  
    }

    _likeCard(e){
        this._elem = e.currentTarget.closest('.element__heart');
        this._elem.classList.toggle('element__heart-active');  //1
    }
    
    render(){
        this._card = this._getTemplate();
        this.name = this._card.querySelector('.element__text');
        this.link = this._card.querySelector('.element__img');
        this.link.src = this._link;
        this.link.alt = this._alt;
        this.name.textContent = this._name;
        this._addEventListeners();

        this.link
        .addEventListener('click', 
        () =>{
            this.nameZoom = document.querySelector('.zoom-popup__text');
            this.imgZoom = document.querySelector('.zoom-popup__image');
            this.nameZoom.textContent = this._name;
            this.imgZoom.src = this._link;
            this.imgZoom.alt = this._alt;
            openPopup(zoomPopup)
        });
        
        return this._card;
    }
}


export{Card};

