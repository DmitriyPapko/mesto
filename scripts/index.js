const editPopup = document.querySelector('.profile__btn');
const profilePopup = document.querySelector('.profile-popup');
const closePopupBtn = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input_js_name');
const popupInputJob = document.querySelector('.popup__input_js_job');
const formElement = document.querySelector('.popup__form');
const popup = document.querySelector('.popup')

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
const popupList = Array.from(document.querySelectorAll('.popup'))
const checkEsc = (e) =>{
   if(e.key === 'Escape'){
    popupList.forEach(popup => {
      closePopup(popup);   
    })
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


editPopup.addEventListener('click', () =>{
  popupInputName.value = profileTitle.textContent;
  popupInputJob.value = profileSubtitle.textContent;
  const buttonElement = document.querySelector('.popup__save');
  buttonElement.classList.remove('popup__save-disable')
  buttonElement.disabled = false
  
  openPopup(profilePopup);
});

closePopupBtn.addEventListener('click', () => {
  closePopup(profilePopup);
});

formElement.addEventListener('submit', handleProfileFormSubmit);

const btnAddCard = document.querySelector('.profile__add-btn');
const popupCard = document.querySelector('.popup_card');
const closePopupBtnCard = document.querySelector('.popup__close-card');


btnAddCard.addEventListener('click', () => {
  openPopup(popupCard);
});

closePopupBtnCard.addEventListener('click', () => {
  closePopup(popupCard);
});

const btnCreateCard = document.querySelector('.popup__form_new-place');
const card = document.querySelector('.element');
const cards = document.querySelector('.elements');
const cardInputName = document.querySelector('.popup__input_zoom-name');
const cardInputImgLink = document.querySelector('.popup__input_zoom-link');
const cardTemplate = document.querySelector('#template-card').content;
const newCard = cardTemplate.querySelector('.element').cloneNode(true);
const zoomPopup  = document.querySelector('.zoom-popup');
const imgElem = document.querySelector('.zoom-popup__image');
const textElem = document.querySelector('.zoom-popup__text');
const zoomPopupClose = document.querySelector('.zoom-popup__close');



const createCard = (i) =>{
  const cardTemplate = document.querySelector('#template-card').content;
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__text').textContent = i.name;
  newCard.querySelector('.element__img').src = i.link;
  newCard.querySelector('.element__img').alt = i.name;

    newCard.querySelector('.element__basket').addEventListener('click', e => {
    const element = e.currentTarget.closest('.element');
    element.remove();
 });

    newCard.querySelector('.element__heart').addEventListener('click',  e => {
      const element = e.currentTarget.closest('.element__heart');
      if(element.classList.contains('element__heart-active')){
        element.classList.remove('element__heart-active'); 
      }
      else{
        element.classList.add('element__heart-active'); 
      } 
    })
    newCard.querySelector('.element__img').addEventListener('click', () => {
      imgElem.src = i.link;
      textElem.textContent = i.name;
      imgElem.alt = i.name;
      openPopup(zoomPopup)
    })
    return newCard;
}

zoomPopupClose.addEventListener('click', () => {
  closePopup(zoomPopup);
})

initialCards.forEach((i) => {
  const cardElement = createCard(i)
  cards.prepend(cardElement)
})



const saveCard = (evt) => {
  evt.preventDefault();
  const i = {
  };
  i.name = cardInputName.value;
  i.link = cardInputImgLink.value
  closePopup(popupCard);
  const buttonElement = document.querySelector('.popup__create-card');
  buttonElement.classList.add('popup__save-disable')
  buttonElement.disabled = true
  btnCreateCard.reset();
  cards.prepend(createCard(i))
}

btnCreateCard.addEventListener('submit', saveCard);
