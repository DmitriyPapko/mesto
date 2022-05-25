const editPopup = document.querySelector('.profile__btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input_js_name');
const popupInputJob = document.querySelector('.popup__input_js_job');
const formElement = document.querySelector('.popup__form');

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