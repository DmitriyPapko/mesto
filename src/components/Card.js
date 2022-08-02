
/// import{ openPopup, zoomPopup} from './index.js'
class Card {
    constructor(item, cardTemplate, handleCardClick){
      this._name = item.name;
      this._link = item.link;
      this._alt = item.alt;
      this._cardTemplate = cardTemplate;
      this._handleCardClick = handleCardClick;
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
        this.link.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })   
    }


    _deleteCard(e){
        this._elem = e.currentTarget.closest('.element');
        this._elem.remove();  
    }

    _likeCard(e){
        e.currentTarget.classList.toggle('element__heart-active');   
    }
    
    render(){
        this._card = this._getTemplate();
        this.name = this._card.querySelector('.element__text');
        this.link = this._card.querySelector('.element__img');
        this.link.src = this._link;
        this.link.alt = this._alt;
        this.name.textContent = this._name;
        this._addEventListeners();
        return this._card;
    }
}


export{Card};

