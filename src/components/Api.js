export default class Api {
        constructor(options){         
            this.baseUrl = options.baseUrl;
            this.headers = options.headers;
        }

        _getJsonOrError(res){
            if (res.ok){
                return res.json();
            }
            return Promise.reject('err')
        }

        getInitialCards(){
            return fetch(`${this.baseUrl}/cards`, {
                headers:this.headers
            })
            .then(this._getJsonOrError)
        }
        
        getUserInfo(){
            return fetch(`${this.baseUrl}/users/me`, {
                headers:this.headers,
            })
            .then(this._getJsonOrError);
        }

       editProfile(user){
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers:this.headers,
            body:JSON.stringify({name:user.name, about:user.about})
        })
        .then(this._getJsonOrError);
       }
      
       addCard(card){
        return fetch(`${this.baseUrl}/cards`, {
            method:'POST',
            headers:this.headers,
            body:JSON.stringify(card)
        })
        .then(this._getJsonOrError);   
       }

       addCardLike(id){
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
          method: 'PUT',
          headers: this.headers,
        })
        .then(this._getJsonOrError);
      }

      removeCardLike(id){
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this.headers,
          })
          .then(this._getJsonOrError);
      }

       deleteCard(id){
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._getJsonOrError);
    }
      
     editProfileImage(img){
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers:this.headers,
            body:JSON.stringify({avatar:img.avatar})
        })
        .then(this._getJsonOrError);
     }

}