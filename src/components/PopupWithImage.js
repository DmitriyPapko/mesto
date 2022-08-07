import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopup) {
        super(selectorPopup);
        this._popupZoomImage = this._selectorPopup.querySelector('.zoom-popup__image');
        this._popupZoomText = this._selectorPopup.querySelector('.zoom-popup__text');
    }
    open(name, link) {
        this._popupZoomImage.src = link;
        this._popupZoomImage.alt = link;
        this._popupZoomText.textContent = name;
        super.open();
    }
    close() {
        super.close();
    }
}