class UserInfo {
  constructor(nameUserSelector, jobUserSelector) {
    this._elementUserName = document.querySelector(nameUserSelector);
    this._elementUserJob = document.querySelector(jobUserSelector);
  }

  //devuelve un objeto con los valores actuales del nombre y trabajo de usuario
  //es util cuando es necesario mostrar los datos del usuario en el formulario abierto
  getUserInfo() {
    return {
      name: this._elementUserName.textContent,
      job: this._elementUserJob.textContent,
    };
  }

  //toma los datos del nuevo usuario y los agrega en la página
  //actualiza los elementos del DOM con la nueva información
  setUserInfo(newName, newJob) {
    this._elementUserName.textContent = newName;
    this._elementUserJob.textContent = newJob;
  }
}

export default UserInfo;
