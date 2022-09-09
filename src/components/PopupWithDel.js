import { Popup } from "./Popup";
export default class PopupWithDel extends Popup {
    constructor(selectorPopup, submitForm) {
        super(selectorPopup)
        this._submitForm = submitForm;
        this._form = this._selectorPopup.querySelector('.form');
        this._pupupDel = document.querySelector('.popup__delete');
        this._btnSave = this._form.querySelector('.popup__save');
    }
    
    loading(download, message){
      if(download === true){
        this._btnSave.textContent = message;
      }
      else{
        this._btnSave.textContent = message;
      }
    }

    personalCard(card){
      this._card = card;
    }

    open(data, card){
      super.open();
      this._data = data;
      this._card = card;
    }
  

    close(){
      super.close()
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
          event.preventDefault()
          this._submitForm(this._data, this._card);
        })
      }
    
}