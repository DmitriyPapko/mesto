class Popup {
    constructor(selectorPopup) {
        this._selectorPopup = document.querySelector(selectorPopup);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        document.addEventListener('keyup', this._handleEscClose)
        this._selectorPopup.classList.add('popup_opened')
    }

    close() {
        document.addEventListener('keyup', this._handleEscClose)
        this._selectorPopup.classList.remove('popup_opened')
       
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._selectorPopup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup__close') || event.target.classList.contains('popup_opened')) {
                this.close();
            }
        })
    }
}

export { Popup };



