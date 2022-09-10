//imports
import './index.css'
import {
  btnEditPopup, profilePopup, btnClosePopup, profileTitle, profileSubtitle, cards, zoomPopup, btnAddCard,
  formProfile, popupCard, formNewPlace, templateCard, config, avatarContainer, avatarProfileImg,
  popupProfileImage, profileAvatarBtn, formNewAvatar, pupupDelete
} from '../utils/constants'
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js'
import Sections from '../components/Sections.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import PopupWithDel from '../components/PopupWithDel';


const validateProfile = new FormValidator(config, formProfile);
const validateNewPlace = new FormValidator(config, formNewPlace);
const validateAvatar = new FormValidator(config, formNewAvatar)
const objectElements = { name: profileTitle, about: profileSubtitle, avatar: avatarProfileImg };
const userInfo = new UserInfo(objectElements);
const zoomPopupOpen = new PopupWithImage(zoomPopup);



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: '3b64a3da-1d61-4d4d-9880-31d22a99d7b3',
    'Content-Type': 'application/json'
  }
})


const openProfileAvatarEdit = () => {
  validateAvatar.toggleButtonState();
  editAvatarImg.open();
}

profileAvatarBtn.addEventListener('click', openProfileAvatarEdit)


const handleCardClick = (name, link) => {
  zoomPopupOpen.open(name, link);
}


const openPopupedit = () => {
  validateProfile.toggleButtonState();
  editProfileInfo.open()
}



btnEditPopup.addEventListener('click', () => {
  validateProfile.toggleButtonState();
  editProfileInfo.setInputValues(userInfo.getUserInfo());
  openPopupedit();
});


btnAddCard.addEventListener('click', () => {
  createNewCard.open()
  validateNewPlace.toggleButtonState();
})

const cardList = new Sections({
  renderer: (data) => {
    const card = handleCreateCard(data)
    cardList.addItem(card)
  }
}, cards)


const enableValidation = () => {
  validateProfile.enableValidation();
  validateNewPlace.enableValidation();
  validateAvatar.enableValidation();
}


enableValidation(config)


let userId;

const createNewCard = new PopupWithForm(popupCard, (data) => {
  createNewCard.loading(true, 'Сохранение...');
  api.addCard(data)
    .then((card) => {
      cardList.addItem(handleCreateCard(card))
      createNewCard.close();
    }).catch((err) => console.log(err))
    .finally(() => { createNewCard.loading(false, 'Создать') })
});


const deletePersonalCard = new PopupWithDel(pupupDelete, (data, card) => {
  deletePersonalCard.loading(true, 'Удаление...');
  api.deleteCard(data._id)
    .then(() => {
      newCard1.deleteCard(card)
      deletePersonalCard.close()
    }).catch((err) => console.log(err))
    .finally(() => (deletePersonalCard.loading(false, 'Удалить')))
})

deletePersonalCard.setEventListeners();

const editProfileInfo = new PopupWithForm(profilePopup, (data) => {
  editProfileInfo.loading(true, 'Сохранение...');
  api.editProfile(data)
    .then((user) => {
      userInfo.setUserInfo(user)
      editProfileInfo.close();
    }).catch((err) => console.log(err))
    .finally(() => { editProfileInfo.loading(false, 'Сохранить') })
});


const editAvatarImg = new PopupWithForm(popupProfileImage, (data) => {
  editAvatarImg.loading(true, 'Сохранение...');
  api.editProfileImage(data)
    .then((user) => {
      userInfo.setUserInfo(user)
      editAvatarImg.close();
    }).catch((err) => console.log(err))
    .finally(() => { editAvatarImg.loading(false, 'Сохранить') })
})


const handleDeleteCard = (data, card) => {
  return deletePersonalCard.open(data, card)
}

editAvatarImg.setEventListeners();
createNewCard.setEventListeners();
editProfileInfo.setEventListeners();
zoomPopupOpen.setEventListeners();

let newCard;

const handleCreateCard = (card) => {
   newCard = new Card(card, templateCard, handleCardClick, userId, handleDeleteCard,
    {
      handleLikeCard: () => {
        api
          .addCardLike(card._id)
          .then((res) => {
            newCard.likeCard();
            newCard.setLikes(res); 
          })
          .catch((err) => console.log(err));
      },
      handleDelLike: () => {
        api.removeCardLike(card._id)
          .then((res) => {
            newCard.deleteLikeCard();
            newCard.setLikes(res);
          }).catch((err) => console.log(err))
      }
    }
  )
  return newCard.render();
};



Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, users]) => {
    userId = users._id;
    userInfo.setUserInfo(users)
    cardList.renderItems(cards.reverse())
  }).catch((err) => (console.log(err)))


export { config }


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

