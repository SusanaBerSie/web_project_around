class UserInfo {
  constructor(nameUserSelector, jobUserSelector, photoUserSelector) {
    this._elementUserName = document.querySelector(nameUserSelector);
    this._elementUserJob = document.querySelector(jobUserSelector);
    this._elementUserPhoto = document.querySelector(photoUserSelector);
  }

  //devuelve un objeto con los valores actuales del nombre y trabajo de usuario
  getUserInfo() {
    return {
      name: this._elementUserName.textContent,
      job: this._elementUserJob.textContent,
    };
  }

  //toma los datos del nuevo usuario y los agrega en la página
  setUserInfo(newName, newJob, newPhotoProfile) {
    console.log(this._elementUserName);
    this._elementUserName.textContent = newName;
    this._elementUserJob.textContent = newJob;
    this._elementUserPhoto.src = newPhotoProfile;
  }
}

export default UserInfo;
