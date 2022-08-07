import { Popup } from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(selectorPopup, submitForm) {
    super(selectorPopup);
    this._submitForm = submitForm;
    this._form = this._selectorPopup.querySelector('.form')
    this._formInputs = this._form.querySelectorAll('.popup__input')
    this._formInputName = this._form.querySelector('.popup__input_js_name')
    this._formInputJob = this._form.querySelector('.popup__input_js_job')
  }

  _getInputValues() {
    this._data = {};
    this._formInputs.forEach(item => {
      return this._data[item.id] = item.value
    });
    return this._formInputs;
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submitForm(this._getInputValues())
    })
  }


  setInputValues(data) {
    this._formInputName.value = data.name;
    this._formInputJob.value = data.about;
  }


  close() {
    this._form.reset()
    super.close()
  }
}