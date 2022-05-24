const editPopup = document.querySelector('.profile__btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input_js_name');
const popupInputJob = document.querySelector('.popup__input_js_job');
const popupSaveBtn = document.querySelector('.popup__save');
const formElement = document.querySelector('.popup__container');

function openPopup(){
   popupInputName.value = profileTitle.textContent;
   popupInputJob.value = profileSubtitle.textContent;
   popup.classList.add('popup_opened');
   openPopup(popup)
}

function closePopup(){
   profileTitle.textContent = popupInputName.value;
   profileSubtitle.textContent = popupInputJob.value;
   popup.classList.remove('popup_opened');
   closePopup(popup);
}

popupSaveBtn.onclick = function(evt){
   evt.preventDefault();
   closePopup(popup);
}

editPopup.addEventListener('click', openPopup);
closePopupBtn.addEventListener('click', closePopup);
popupSaveBtn.addEventListener('click', closePopup);