import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._submitForm = submitForm;
    this._form = this._selectorPopup.querySelector('.form');
    this._formInputs = this._form.querySelectorAll('.popup__input');
    this._formInputName = this._form.querySelector('.popup__input_js_name');
    this._formInputJob = this._form.querySelector('.popup__input_js_job');
    this._btnSave = this._form.querySelector('.popup__save');
  }

  loading(download, message){
    if(download === true){
      this._btnSave.textContent = message;
    }else{
      console.log(download)
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
    this._formInputName.value = data.name;
    this._formInputJob.value = data.about;
  }


  close() {
    this._form.reset();
    super.close();
  }
}