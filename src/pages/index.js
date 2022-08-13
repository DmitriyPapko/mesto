//imports
import './index.css'
import {
  btnEditPopup, profilePopup, btnClosePopup, profileTitle, profileSubtitle, popupInputName,
  popupInputJob, cards, cardInputName, cardInputImgLink, zoomPopup, btnAddCard,
  formProfile, popupCard, formNewPlace, templateCard, initialCards, config, avatarContainer, avatarProfileImg, popupProfileImage, profileAvatarBtn
} from '../utils/constants'
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js'
import Sections from '../components/Sections.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import PopupWhithProfile from '../components/PopupWhithProfile';

const validateProfile = new FormValidator(config, formProfile);
const validateNewPlace = new FormValidator(config, formNewPlace);
const objectSelector = { name: profileTitle, about: profileSubtitle };
const userInfo = new UserInfo(objectSelector);
const zoomPopupOpen = new PopupWithImage(zoomPopup);
const profileImageOpen = new PopupWhithProfile(popupProfileImage);


profileImageOpen.setEventListeners();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: '3b64a3da-1d61-4d4d-9880-31d22a99d7b3',
    'Content-Type': 'application/json'
  }
})


const handleCreateCard = (item) => {
  item.name = cardInputName.value;
  item.link = cardInputImgLink.value
  const card = createCard(item);
  cardList.addItem(card);
  popupAddCard.close();
}

const openProfileAvatarEdit = () => {
  profileImageOpen.open();
}


profileAvatarBtn.addEventListener('click', openProfileAvatarEdit)

const submitProfile = (user) => {
  user.name = popupInputName.value;
  user.about = popupInputJob.value;
  userInfo.setUserInfo(user)
  popupEditProfile.close();
}

const popupEditProfile = new PopupWithForm(profilePopup, submitProfile);



const popupAddCard = new PopupWithForm(popupCard, handleCreateCard);

const handleCardClick = (name, link) => {
  zoomPopupOpen.open(name, link);
}
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
zoomPopupOpen.setEventListeners();

const openPopupedit = () => {
  validateProfile.toggleButtonState();
  popupEditProfile.open()
}
const closePopupEdit = () => {
  popupEditProfile.close()
}

btnClosePopup.addEventListener('click', () => {
  closePopupEdit();
})

btnEditPopup.addEventListener('click', () => {
  validateProfile.toggleButtonState();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  openPopupedit();
});

const cardAddbtn = () => {
  popupAddCard.open();
}

btnAddCard.addEventListener('click', () => {
  validateNewPlace.toggleButtonState();
  cardAddbtn();
})

const createCard = (item) => {
  const card = new Card(item, templateCard, handleCardClick)
  return card.render();
}

const cardList = new Sections({
  items: initialCards,
  renderer: (data) => {
    const card = createCard(data)
    cardList.addItem(card)
  }
}, cards)
cardList.renderItems();


const enableValidation = () => {
  validateProfile.enableValidation();
  validateNewPlace.enableValidation();
}


enableValidation(config)


//Проверка hover у контейнера профиля, чтобы поменять опасити у изображения профиля.
const checkHover = (event) => {
  switch (event.type) {
    case 'mouseover':
      avatarProfileImg.style.opacity = '0.5';
      break;
    case 'mouseout':
      avatarProfileImg.style.opacity = '1';
      break;
  }
}
avatarContainer.addEventListener('mouseover', checkHover);
avatarContainer.addEventListener('mouseout', checkHover);


export { config }

