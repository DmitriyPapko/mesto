const editPopup = document.querySelector('.profile__btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input_js_name');
const popupInputJob = document.querySelector('.popup__input_js_job');
const formElement = document.querySelector('.popup__form');

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




function openPopup() {
  popupInputName.value = profileTitle.textContent;
  popupInputJob.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');
}


function closePopup() {
  popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = popupInputName.value;
  profileSubtitle.textContent = popupInputJob.value;
  closePopup();
}


editPopup.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

const addBtnCard = document.querySelector('.profile__add-btn');
const popupCard = document.querySelector('.popup_card');
const closePopupBtnCard = document.querySelector('.popup__close-card');


function openPopupCard() {
  popupCard.classList.add('popup_opened');

}
function closePopupCard() {
  popupCard.classList.remove('popup_opened');
}

addBtnCard.addEventListener('click', openPopupCard);
closePopupBtnCard.addEventListener('click', closePopupCard);

const btnCreateCard = document.querySelector('.popup__form_new-place');
const card = document.querySelector('.element');
const cards = document.querySelector('.elements');
const cardInputName = document.querySelector('.popup__input_zoom-name');
const cardInputImgLink = document.querySelector('.popup__input_zoom-link');
const cardTemplate = document.querySelector('#template-card').content;
const newCard = cardTemplate.querySelector('.element').cloneNode(true);
const zoomPopup  = document.querySelector('.zoom');
console.log(zoomPopup)


// const deleteButton = document.querySelector('.element__basket').addEventListener('click', e => {
//    const element = e.currentTarget.closest('.element');
//    element.remove();
// });

// const heartBtn = document.querySelector('.element__heart').addEventListener('click', e => {
//   const element = e.currentTarget.closest('.element__heart');
//   if(element.classList.contains('element__heart-active')){
//     element.classList.remove('element__heart-active'); 
//   }
//   else{
//     element.classList.add('element__heart-active'); 
//   } 
// })


const createCard = (i) =>{
  const cardTemplate = document.querySelector('#template-card').content;
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);
  newCard.querySelector('.element__text').textContent = i.name;
  newCard.querySelector('.element__img').src = i.link;
  
  cards.prepend(newCard);

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
    newCard.querySelector('.element__img').onclick = () => {
      const imgElem = document.querySelector('.zoom__image');
      const textElem = document.querySelector('.zoom__text');
      imgElem.src = i.link;
      textElem.textContent = i.name;
      zoomPopup.classList.add('zoom__opened')
    }
    const zoomPopupClose = document.querySelector('.zoom__close').addEventListener('click', () => {
      zoomPopup.classList.remove('zoom__opened')
    })
}

initialCards.forEach(createCard);

const saveCard = (evt) => {
  evt.preventDefault();
  const i = {
  };
  i.name = cardInputName.value;
  i.link = cardInputImgLink.value
  closePopupCard();
  btnCreateCard.reset();
  return createCard(i) 
}

btnCreateCard.addEventListener('submit', saveCard);



