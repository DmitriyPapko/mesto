import { Popup } from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(elementPopup) {
        super(elementPopup);
        this._popupZoomImage = this._elementPopup.querySelector('.zoom-popup__image');
        this._popupZoomText = this._elementPopup.querySelector('.zoom-popup__text');
    }
    open(name, link) {
        this._popupZoomImage.src = link;
        this._popupZoomImage.alt = link;
        this._popupZoomText.textContent = name;
        super.open();
    }

}