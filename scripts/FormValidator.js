
export class FormValidator {
    constructor(config,formEl){
        this._formSel = config.formSel;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._formEl = formEl;
        this._inputList = Array.from(this._formEl.querySelectorAll(this._inputSelector))
        this._buttonElement = formEl.querySelector(config.submitButtonSelector);
    }

    _resetButton(){
      this._buttonElementCreateCard = document.querySelector('.popup__create-card');
      this._buttonElementCreateCard.classList.add('popup__save-disable')
      this._buttonElementCreateCard.disabled = true
      this._buttonElementSaveProfile = document.querySelector('.popup__save');
      this._buttonElementSaveProfile.classList.remove(this._inactiveButtonClass);
      this._buttonElementSaveProfile.disabled = false; 
    }  

     _showInputError  (inputElement, errorMessage) {
        this._errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);   
        this._errorElement.textContent = errorMessage;
        this._errorElement.classList.add(this._errorClass);
      };    
    
       _hideInputError  (inputElement)  {
        this._errorElement = this._formEl.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        this._errorElement.classList.remove(this._errorClass);
        this._errorElement.textContent = '';
      };
    
       _checkInputValidity (inputElement)  {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
      };
    
        _hasInvalidInput  () {
        return this._inputList.some((inputElement) => {
         return !inputElement.validity.valid;
       })
     }
         
      _toggleButtonState  () {
        if (!this._hasInvalidInput()){
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false
        }else{
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true
        }
      }
      
    
      _setEventListeners  () { 
        this._resetButton();
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () =>  {
            this._checkInputValidity(inputElement);  
            this._toggleButtonState();
          });
        });
        this._toggleButtonState();
      }; 
      
      enableValidation ()  {
        
        this._toggleButtonState();   
        this._setEventListeners() 

      }; 
    }
