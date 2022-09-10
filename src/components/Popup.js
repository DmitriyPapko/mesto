class Popup {
    constructor(elementPopup) {
        this._elementPopup = document.querySelector(elementPopup);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        document.addEventListener('keyup', this._handleEscClose)
        this._elementPopup.classList.add('popup_opened')
    }

    close() {
        this._elementPopup.classList.remove('popup_opened')
        document.removeEventListener('keyup', this._handleEscClose)
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }

    setEventListeners() {
        this._elementPopup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup__close') || event.target.classList.contains('popup_opened')) {
                this.close();
            }
        })
    }
}

export { Popup };



