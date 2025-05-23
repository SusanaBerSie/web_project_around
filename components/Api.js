class Api {
  constructor(apiConfig) {
    this.url = apiConfig.baseUrl;
    this.token = apiConfig.headers.authorization;
  }

  // 1. cargar la información del usuario desde el servidor
  getUserInfo() {
    return fetch(this.url + "users/me", {
      method: "GET",
      headers: {
        authorization: this.token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // 3. editar perfil
  editProfile(userName, userAbout) {
    return fetch(this.url + "users/me", {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // 2. cargar las tarjetas desde el servidor
  getInitialCards() {
    return fetch(this.url + "cards/", {
      method: "GET",
      headers: {
        authorization: this.token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  // 4. agregar una nueva tarjeta
  addNewCard(name, link) {
    return fetch(this.url + "cards/", {
      method: "POST",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // 8.Añadir y eliminar "me gusta”
  changeLikeCardStatus(cardId, isLiked) {
    return fetch(this.url + "cards/" + cardId + "/likes", {
      method: isLiked ? "DELETE" : "PUT",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        /*vacio?*/
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
  // 7. eliminar tarjeta
  deleteCard(cardId) {
    return fetch(this.url + "cards/" + cardId, {
      method: "DELETE",
      headers: {
        authorization: this.token,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // 9.Actualizar la foto de perfil
  switchPhotoProfile(url) {
    return fetch(this.url + "users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: this.token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: url,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

export default Api;
