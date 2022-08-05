const btnEditPopup = document.querySelector('.profile__btn');
const profilePopup = '.profile-popup';
const btnClosePopup = document.querySelector('.popup__close');
const profileTitle = '.profile__title';
const profileSubtitle = '.profile__subtitle';
const popupInputName = document.querySelector('.popup__input_js_name');
const popupInputJob = document.querySelector('.popup__input_js_job');
const cards = document.querySelector('.elements');
const cardInputName = document.querySelector('.popup__input_zoom-name');
const cardInputImgLink = document.querySelector('.popup__input_zoom-link');
const zoomPopup = '.zoom-popup';
const btnAddCard = document.querySelector('.profile__add-btn');
const popupCard = '.popup_card';
const formProfile = document.querySelector('.form')
const formNewPlace = document.querySelector('.popup__form_new-place')
const templateCard = '#template-card';
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

export { btnEditPopup, profilePopup, btnClosePopup, profileTitle, profileSubtitle, 
    popupInputName, popupInputJob, templateCard, cards, cardInputName, cardInputImgLink, zoomPopup, 
    btnAddCard, formProfile, popupCard, formNewPlace, initialCards, config }