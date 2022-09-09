
class Card {
  constructor(item, cardTemplate, handleCardClick, userId, handleDelCard, { handleLikeCard, handleDelLike }) {
    this._name = item.name;
    this._link = item.link;
    this._alt = item.alt;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._userId = userId;
    this._handleDelCard = handleDelCard;
    this._handleLikeCard = handleLikeCard;
    this._handleDelLike = handleDelLike;
    this._item = item;
    this._likes = item.likes;
    this._element = this._getTemplate();
    this._ownerId = item.owner._id;

  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplate)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }


  setLikes(likes) {
    this._likesNum = this._card.querySelector('.element__like-number');
    if (likes.length === 0) {
      this._likesNum.textContent = '';
    } else {
      this._likesNum.textContent = likes.length;
    }
  }

  _checkOwner(){
    if(this._ownerId !== this._userId){
      this._card.querySelector('.element__basket').remove()
    }
  }

  isLiked() {
    this._likes.forEach((likes) => {
      if (this._userId === likes._id) {
        this.likeCard();
      } else {
        this.deleteLikeCard();
      }
    })
  } 
   

  _addEventListeners() {
    this._card.querySelector('.element__basket')
      .addEventListener('click', () =>{
        this._handleDelCard(this._item, this._card)
      });
    this._card.querySelector('.element__heart')
      .addEventListener('click', ()=>{
        this._card.querySelector('.element__heart').classList.toggle('element__heart-active')      
        if(this._card.querySelector('.element__heart').classList.contains('element__heart-active')){
          this._handleLikeCard();
          this._card.querySelector('.element__like-number').textContent++
        }else{
          this._card.querySelector('.element__like-number').textContent--
          this._handleDelLike();
        }
      });
    this.link.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })
  }


  deleteCard() {
    this._card.remove();
    this._card = null;
  }

  likeCard() {
    this._card.querySelector('.element__heart').classList.toggle('element__heart-active')
  }
   
 
  deleteLikeCard() {
    this._card.querySelector('.element__heart').classList.remove('element__heart-active')
  }

  render() {
    this._card = this._getTemplate();
    this.name = this._card.querySelector('.element__text');
    this.link = this._card.querySelector('.element__img');
    this.link.src = this._link;
    this.link.alt = this._alt;
    this.name.textContent = this._name;
    this.setLikes(this._likes);
    this.isLiked();
    this._addEventListeners();
    this._checkOwner()
    return this._card;
  }
}


export { Card };

