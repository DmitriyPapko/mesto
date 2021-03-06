 class Popup{
    constructor(selectorPopup){
        this._selectorPopup = document.querySelector(selectorPopup);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open(){
          document.addEventListener('click', this._handleEscClose)
          this._selectorPopup.classList.add('popup_opened')
    }

    close(){
        this._selectorPopup.classList.remove('popup_opened')
        document.addEventListener('keyup', this._handleEscClose)    
    }
  
   _handleEscClose(e){
       if(e.key === 'Escape'){
        this.close();
       }  
   }

   setEventListeners(){
    this._selectorPopup.addEventListener('mousedown', (e) => { 
       if ( e.target.classList.contains('popup__close') || e.target.classList.contains('popup_opened')){
        this.close();
       }
    })
   }
}

export{ Popup };