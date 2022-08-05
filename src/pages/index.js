import '../pages/index.css'
import { btnEditPopup, profilePopup, btnClosePopup, profileTitle, profileSubtitle, popupInputName,
   popupInputJob, cards, cardInputName, cardInputImgLink, zoomPopup, btnAddCard, 
   formProfile, popupCard, formNewPlace, templateCard, initialCards, config} from '../utils/constants'
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js'
import Sections from '../components/Sections.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

const validateProfile = new FormValidator(config, formProfile);
const validateNewPlace = new FormValidator(config, formNewPlace);
const objectSelector = { name: profileTitle, about: profileSubtitle };
const userInfo = new UserInfo(objectSelector);
const zoomPopupOpen = new PopupWithImage(zoomPopup);

const submitProfile = (user) => {
  user.name = popupInputName.value;
  user.about = popupInputJob.value;
  userInfo.setUserInfo(user)
  popupEditProfile.close();
}

const popupEditProfile = new PopupWithForm(profilePopup, submitProfile);

const handleCreateCard = (item) => {
  item = {

  }
  item.name = cardInputName.value;
  item.link = cardInputImgLink.value
  const card = createCard(item);
  cardList.addItem(card);
  popupAddCard.close();
}

const popupAddCard = new PopupWithForm(popupCard, handleCreateCard);

const handleCardClick = (name, link) => {
  zoomPopupOpen.open(name, link);
}
popupAddCard.setEventListeners();
popupEditProfile.setEventListeners();
zoomPopupOpen.setEventListeners();

const openPopupedit = () => {
  popupEditProfile.open()
}
const closePopupEdit = () => {
  popupEditProfile.close()
}

btnClosePopup.addEventListener('click', () => {
  closePopupEdit();
})

btnEditPopup.addEventListener('click', () => {
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  openPopupedit();
});

const cardAddbtn = () => {
  popupAddCard.open();
}

btnAddCard.addEventListener('click', () => {
  cardAddbtn();
})


const createCard = (item) => {
  const card = new Card(item, templateCard, handleCardClick)
  return card.render();
}

const cardList = new Sections({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item)
    cardList.addItem(card)
  }
}, cards)
cardList.renderItems();


const enableValidation = () => {
  validateProfile.enableValidation();
  validateNewPlace.enableValidation();
}


enableValidation(config)


export { config }