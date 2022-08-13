
class Card {
    constructor(item, cardTemplate, handleCardClick) {
        this._name = item.name;
        this._link = item.link;
        this._alt = item.alt;
        this._cardTemplate = cardTemplate;
        this._handleCardClick = handleCardClick;       
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardTemplate)
            .content.querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _addEventListeners() {
        this._card.querySelector('.element__basket')
            .addEventListener('click', this._deleteCard);
        this._card.querySelector('.element__heart')
            .addEventListener('click',  this._likeCard);
        this._card.querySelector('.element__heart')
            .addEventListener('click',  () => {
                this._elem = this._card.querySelector('.element__like-number');
                this._heartElem = this._card.querySelector('.element__heart');
                if(this._heartElem.classList.contains('element__heart-active')){
                    this._elem.textContent++;
                }else{
                    this._elem.textContent--;
                }
               
            });
        this.link.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })
    }
     
   
    _deleteCard(element) {
        this._elem = element.currentTarget.closest('.element');
        this._elem.remove();
        this._elem = null;
    }

    _likeCard(element) {
        element.currentTarget.classList.toggle('element__heart-active');    
    }

    render() {
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


export { Card };

