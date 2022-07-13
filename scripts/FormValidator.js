
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
        if (inputElement.validity.valid) {
          this._hideInputError(inputElement);
        } else { 
            this._showInputError(inputElement, inputElement.validationMessage);
        }
      };
    
        _hasInvalidInput  () {
        return this._inputList.some((inputElement) => {
         return !inputElement.validity.valid;
       })
     }
         
      toggleButtonState  () {
        if (this._hasInvalidInput()){
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true
        }else{
            this._buttonElement.classList.remove(this._inactiveButtonClass);
            this._buttonElement.disabled = false
        }
      }
       
      _setEventListeners  () { 
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () =>  {
            this._checkInputValidity(inputElement);  
            this.toggleButtonState();
          });
        });
        this.toggleButtonState();
      }; 
      
      enableValidation ()  {  
        this.toggleButtonState();   
        this._setEventListeners() 
      }; 
    }
