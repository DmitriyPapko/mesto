import { Popup } from "./Popup";
export default class PopupWithDel extends Popup {
  constructor(elementPopup, submitForm) {
    super(elementPopup)
    this._submitForm = submitForm;
    this._form = this._elementPopup.querySelector('.form');
    this._btnSave = this._form.querySelector('.popup__save');
  }

  loading(download, message) {
    if (download === true) {
      this._btnSave.textContent = message;
    }
    else {
      this._btnSave.textContent = message;
    }
  }


  open(data, card) {
    super.open();
    this._data = data;
    this._card = card;
  }



  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submitForm(this._data, this._card);
    })
  }

}