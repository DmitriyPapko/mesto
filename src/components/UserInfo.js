export default class UserInfo {
    constructor(objectSelector) {
        this._objectSelector = objectSelector;
        this._name = document.querySelector(objectSelector.name);
        this._about = document.querySelector(objectSelector.about);

    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
        }
    }

    setUserInfo(user) {
        this._name.textContent = user.name;
        this._about.textContent = user.about;
    }
}


