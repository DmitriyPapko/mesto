const editPopup = document.querySelector('.profile__btn');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupInputName = document.querySelector('.popup__input-name');
const popupInputJob = document.querySelector('.popup__input-job');
const popupSaveBtn = document.querySelector('.popup__save');
const formElement = document.querySelector('.popup__container');

function openPopup(popupElem){
   popup.classList.add('popup__opened');
}

function closePopup(popupElem){
   popup.classList.remove('popup__opened');
}

editPopup.addEventListener('click', function(){
   openPopup(popup)
   popupInputName.value = profileTitle.textContent;
   popupInputJob.value = profileSubtitle.textContent;
})

popupSaveBtn.addEventListener('click', function(){
   popup.classList.remove('popup__opened');
   profileTitle.textContent = popupInputName.value;
   profileSubtitle.textContent = popupInputJob.value;
})

formElement.addEventListener('submit', function(evt){
   profileTitle.textContent = popupInputName.value;
   profileSubtitle.textContent = popupInputJob.value;
   closePopup(popup);
   evt.preventDefault(); 
})