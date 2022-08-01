import '../pages/index.css'
const btnEditPopup = document.querySelector('.profile__btn');
const profilePopup = '.profile-popup';
const btnClosePopup = document.querySelector('.popup__close');
const profileTitle = '.profile__title';
const profileSubtitle ='.profile__subtitle';
const popupInputName = document.querySelector( '.popup__input_js_name');
const popupInputJob = document.querySelector('.popup__input_js_job');
const cards = document.querySelector('.elements');
const cardInputName = document.querySelector('.popup__input_zoom-name');
const cardInputImgLink = document.querySelector('.popup__input_zoom-link');
const zoomPopup  = '.zoom-popup';
const btnAddCard = document.querySelector('.profile__add-btn');
const popupCard = '.popup_card';
const formProfile = document.querySelector('.form') 
const formNewPlace = document.querySelector('.popup__form_new-place') 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const config = {
  formSel: '.form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save-disable',
  inputErrorClass: 'popup__input_error',
  errorClass: 'form__input-error'
}

//Classes

import { FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js'
import Sections from '../components/Sections.js';
import {Popup} from '../components/Popup.js';
import PopupWithForm  from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo  from '../components/UserInfo.js';

const  validateProfile = new FormValidator(config, formProfile); 
const  validateNewPlace = new FormValidator(config, formNewPlace);


const objectSelector = {name: profileTitle , about: profileSubtitle};
const userInfo = new UserInfo(objectSelector);
const zoomPopupOpen = new PopupWithImage(zoomPopup);

const submitProfile = (user) =>{
  user.name = popupInputName.value;
  user.about = popupInputJob.value;
  userInfo.setUserInfo(user)
  popupEditProfile.close();
}
const popupEditProfile = new PopupWithForm(profilePopup, submitProfile);

const handleCreateCard = (i) =>{
  i = {

  }
    i.name = cardInputName.value;
   i.link = cardInputImgLink.value
   const card = createCard(i);
   cardList.addItem(card);
   popupAddCard.close();
}

const popupAddCard = new PopupWithForm(popupCard,handleCreateCard);


const  handleCardClick = (name, link)  => {
  zoomPopupOpen.open(name, link);
}
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
zoomPopupOpen.setEventListeners();

const openPopupedit = () =>{
  popupEditProfile.open()
}
const closePopupEdit = () =>{
  popupEditProfile.close()
}

btnClosePopup.addEventListener('click', ()=> {
  closePopupEdit();
})

btnEditPopup.addEventListener('click', () =>{
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  openPopupedit();
});

const cardAddbtn = () => {
  popupAddCard.open();
}

btnAddCard.addEventListener('click', () =>{
  cardAddbtn();
} )


const createCard = (i) =>{
  const card = new Card(i, '#template-card',  handleCardClick)
  return card.render();
}

const cardList = new Sections({
  items : initialCards,
  renderer:(i) =>{
    const card = createCard(i)
    cardList.addItem(card)
  }
}, cards)
cardList.renderItems();


const enableValidation = () =>{  
  validateProfile.enableValidation(); 
  validateNewPlace.enableValidation(); 
} 


enableValidation(config)


export  {config}