
const config = {
    formSel: '.form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save-disable',
    inputErrorClass: 'popup__input_error',
    errorClass: 'form__input-error'
}


const showInputError = (formEl,inputElement, errorMessage) => {
    const errorElement = formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);   
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };    

  const hideInputError = (formEl, inputElement) => {
    const errorElement = formEl.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    errorElement.textContent = '';
  };

  const checkInputValidity = (formEl, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formEl, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formEl, inputElement);
    }
  };

  const  hasInvalidInput = (inputList) =>{
    return inputList.some((inputElement) => {
     return !inputElement.validity.valid;
   })
 }
 
 const toggleButtonState = (inputList, buttonElement) =>{
    if (hasInvalidInput(inputList)){
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true
    }else{
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.disabled = false
    }
  }
  

  const setEventListeners = (formEl) => {
    const inputList = Array.from(formEl.querySelectorAll(config.inputSelector));
    const buttonElement = formEl.querySelector(config.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formEl, inputElement);   
        toggleButtonState(inputList, buttonElement);
      });
    });
    toggleButtonState(inputList, buttonElement);
  }; 
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSel));
    formList.forEach((formSel) => {
        formSel.addEventListener('submit', function (e) {
        e.preventDefault();
      });
      setEventListeners(formSel) 
    }); 
  };
        

   enableValidation(config);


 