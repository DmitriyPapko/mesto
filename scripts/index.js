const btnEditPopup = document.querySelector('.profile__btn');
const profilePopup = document.querySelector('.profile-popup');
const btnClosePopup = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input_js_name');
const popupInputJob = document.querySelector('.popup__input_js_job');
const formElement = document.querySelector('#profile');
const formCard = document.querySelector('.popup__form_new-place');
const cards = document.querySelector('.elements');
const cardInputName = document.querySelector('.popup__input_zoom-name');
const cardInputImgLink = document.querySelector('.popup__input_zoom-link');
const zoomPopup  = document.querySelector('.zoom-popup');
const zoomPopupClose = document.querySelector('.zoom-popup__close');
const popupList = Array.from(document.querySelectorAll('.popup'));
const btnAddCard = document.querySelector('.profile__add-btn');
const popupCard = document.querySelector('.popup_card');
const btnClosePopupCard = document.querySelector('.popup__close-card');

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


const checkEsc = (e) =>{
   if(e.key === 'Escape'){
    const popupOpen= document.querySelector('.popup_opened')
    closePopup(popupOpen);
  };
  };

popupList.forEach(popup => {
  popup.addEventListener('click', (e) =>{
    if(e.target == popup){
      closePopup(popup)
    }
  })
})


function openPopup(popup) {
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', checkEsc)
};



const closePopup = (popup) =>{
 popup.classList.remove('popup_opened')
 document.removeEventListener('keydown', checkEsc)
};



function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputJob.value;
  closePopup(profilePopup);
};


btnEditPopup.addEventListener('click', () =>{
  popupInputName.value = profileTitle.textContent;
  popupInputJob.value = profileSubtitle.textContent;
  openPopup(profilePopup);
});

btnClosePopup.addEventListener('click', () => {
  closePopup(profilePopup);
});


formElement.addEventListener('submit', handleProfileFormSubmit);




btnAddCard.addEventListener('click', () => {
  openPopup(popupCard);
});

btnClosePopupCard.addEventListener('click', () => {
  closePopup(popupCard);
});


zoomPopupClose.addEventListener('click', () => {
  closePopup(zoomPopup);
})

const createCard = (i) =>{
  const card = new Card(i, '#template-card')
  return card.render();
}

initialCards.forEach((i) => {
  cards.prepend(createCard(i))
})


const saveCard = (evt) => {
  evt.preventDefault();
  const i = {
  };
  i.name = cardInputName.value;
  i.link = cardInputImgLink.value
  closePopup(popupCard);
  formCard.reset();
  cards.prepend(createCard(i))
}


formCard.addEventListener('submit', saveCard);
const enableValidation = (config) =>{ 
  const formProfile = document.querySelector('.form') 
  const formNewPlace = document.querySelector('.popup__form_new-place') 
  const  validateProfile = new FormValidator(config, formProfile); 
  const  validateNewPlace = new FormValidator(config, formNewPlace); 
  validateProfile.enableValidation(); 
  validateNewPlace.enableValidation(); 
} 


enableValidation(config)

import { FormValidator} from './FormValidator.js';
import{Card} from './Card.js'
export  {config, openPopup, zoomPopup};