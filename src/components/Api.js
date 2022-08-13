export default class Api {
        constructor(options){
            this.baseUrl = options.baseUrl;
            this.headerds = options.headerds;
        }
        _getHeaders(){
            //?
        }
        _getJsonOrError(res){
            if (res.ok){
                return res.json();
            }
            throw new Error('Ошибка при загрузке данных');
        }

        getInitialCards(){
            return fetch(`${this.baseUrl}/cards`, {
                headerds:this.headerds
            })
            .then(this._getJsonOrError);
        }
        
        getUserInfo(){
            return fetch(`${this.baseUrl}/users/me`, {
                headerds:this.headerds,
            })
            .then(this._getJsonOrError);
        }

       editProfile(user){
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headerds:this.headerds,
            body:JSON.stringify({name:user.name, about:user.about})
        })
        .then(this._getJsonOrError);
       }
      
       addCard(card){
        return fetch(`${this.baseUrl}/cards`, {
            method:'POST',
            headerds:this.headerds,
            body:JSON.stringify({card})
        })
        .then(this._getJsonOrError);   
       }

       addCardLike(id){
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
          method: 'PUT',
          headers: this._headers,
        })
        .then(this._getJsonOrError);
      }

      removeCardLike(){
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers,
          })
          .then(this._getJsonOrError);
      }

       deleteCard(id){
        return fetch(`${this.base}/cards${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._getJsonOrError);
    }
      
     editProfileImage(img){
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headerds:this.headerds,
            body:JSON.stringify({avatar:img.avatar})
        })
        .then(this._getJsonOrError);
     }

}