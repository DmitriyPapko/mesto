import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(elementPopup, submitForm) {
    super(elementPopup);
    this._submitForm = submitForm;
    this._form = this._elementPopup.querySelector('.form');
    this._formInputs = this._form.querySelectorAll('.popup__input');
    this._btnSave = this._form.querySelector('.popup__save');
  }

  loading(download, message){
    if(download === true){
      this._btnSave.textContent = message;
    }else{
      this._btnSave.textContent =  message;
    }
  }



  _getInputValues() {
    this._data = {};
    this._formInputs.forEach(item => {
    this._data[item.name] = item.value
    });
    return this._data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitForm(this._getInputValues());
    })
  }


  setInputValues(data) {
    this._formInputs.forEach(input =>{
      input.value = data[input.name]
    })
  }


  close() {
    this._form.reset();
    super.close();
  }
}