
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
    this._likes = item.likes;//Получаю лайки
    this._ownerId = item.owner._id;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplate)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }


  setLikes(likes) {
    if (likes.likes.length === 0){
      this._likesNum.textContent = '';
    }else{
      this._likesNum.textContent = likes.likes.length
      console.log(this._likesNum)
      console.log(this._likeBtn)
    }
   
  }

  _checkOwner() {
    if (this._ownerId !== this._userId) {
      this._card.querySelector('.element__basket').remove()
    }
  }

  isLiked() {
    this._likes.forEach((likes) => {
      if (this._userId === likes._id) {
        this.likeCard()
      } else {
        this.deleteLikeCard();
      }
    })
  }


  _addEventListeners() {
    this._cardDelBtn
      .addEventListener('click', () => {
        this._handleDelCard(this._item, this._card)
      });
    this._likeBtn
      .addEventListener('click', () => {
        this._likeBtn.classList.toggle('element__heart-active');
        if (this._likeBtn.classList.contains('element__heart-active')) {
          // this._likesNum.textContent++
          this._handleLikeCard();
        } else {
          // this._likesNum.textContent--
          this._handleDelLike();
        }
      });
    this.link.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    })
  }


  deleteCard(card) {
    card.remove();
    card = null;
  }

  likeCard() {
    this._likeBtn.classList.add('element__heart-active');
  }


  deleteLikeCard() {
    this._likeBtn.classList.remove('element__heart-active');
  }

  render() {
    this._card = this._getTemplate();
    this.name = this._card.querySelector('.element__text');
    this.link = this._card.querySelector('.element__img');
    this._cardDelBtn = this._card.querySelector('.element__basket');
    this._likesNum = this._card.querySelector('.element__like-number');//СЧЕТЧИК ЛАЙКОВ
    this._likeBtn = this._card.querySelector('.element__heart');//КНОПКА ЛАЙКА
    this._likesNum.textContent = `${this._likes.length}`; //ПРИ РЕНДЕРЕ МЕНЯЮ ЗНАЧЕНИЯ СЧЕТЧИКОВ
    this.link.src = this._link;
    this.link.alt = this._alt;
    this.name.textContent = this._name;
    this.isLiked();
    this._addEventListeners();
    this._checkOwner()
    return this._card;
  }
}


export { Card };

