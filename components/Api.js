class Api {
  constructor(url, token) {
    this.url = url;
    this.token = token;
  }

  // 1. cargar la información del usuario desde el servidor
  getUserInfo() {
    return fetch(this.url + "users/me", {
      method: "GET",
      headers: {
        authorization: this.token,
      },
    });
  }

  // 2. cargar las tarjetas desde el servidor
  //Utiliza este array cuando se muestren las tarjetas precargadas,
  // y elimina el antiguo código para mostrar las tarjetas iniciales.
  getInitialCards() {
    fetch(this.url + "cards/", {
      method: "GET",
      headers: {
        authorization: this.token,
      },
    }).then((res) => {
      console.log(res);
    });
  }

  // 3. editar perfil
  editProfile(userName, userAbout) {
    fetch(this.url + "users/me", {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    });
  }

  // 4. agregar una nueva tarjeta
  addNewCard() {
    fetch(this.url + "cards/", {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        link: this.url,
      }),
    });
  }

  // 5. alternar ''me gusta'' en una tarjeta
  isLiked() {}

  // 7. eliminar tarjeta
  deleteCard(cardId) {
    fetch(this.url + "cards/" + cardId, {
      method: "DELETE",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: cardId,
        //datos de la tarjeta. Return??
      }),
    });
  }

  // 8. Añadir y eliminar "me gusta"
  addLike() {
    fetch(this.url + "cards/" + cardId + "/likes", {
      method: "PUT",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: cardId,
        //datos de la tarjeta. Return??
      }),
    });

    //Para eliminar el "me gusta", basta con enviar una solicitud DELETE con la misma URL
    // cardId en la URL debe sustituirse por la propiedad _id de la tarjeta correspondiente.
    fetch(this.url + "cards/" + cardId + "/likes", {
      method: "DELETE",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: cardId,
        //datos de la tarjeta. Return??
      }),
    });
  }

  // 9.Actualizar la foto de perfil  PATCH https://around-api.es.tripleten-services.com/v1/users/me/avatar
  switchPhotoProfile(url) {
    fetch(this.url + "users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: url,
      }),
    });
  }
}

export default Api;
