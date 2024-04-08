import { setFormError } from "../utils/set-form-error.js";
import { StorageToken } from "./storage.js";
import { getMessageAndInputIdFromError } from "../utils/get-message-and-input-id-from-error.js";

axios.defaults.baseURL = "http://localhost:3000";

export class API {
  static async login(formData) {
    try {
      const { data: token } = await axios.post("login.php", formData);

      StorageToken.set(token);

      window.location.href = "dash.html";
    } catch (e) {
      const { errorMessage, idOfElementToShowErrorMessage } = getMessageAndInputIdFromError(e);

      setFormError(errorMessage, idOfElementToShowErrorMessage);
    }
  }

  static async sign(formData) {
    try {
      await axios.post("register.php", formData);

      this.login(formData);
    } catch (e) {
      const { errorMessage, idOfElementToShowErrorMessage } = getMessageAndInputIdFromError(e);

      setFormError(errorMessage, idOfElementToShowErrorMessage);
    }
  }

  static async getUserData() {
    try {
      const { data } = await axios.get(`getProfile.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      const users = data[0];

      return users;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async getUsersAmountData() {
    try {
      const { data } = await axios.get(`getNumUsers.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      const usersAmount = data[0];

      return usersAmount;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async getAdminAmountData() {
    try {
      const { data } = await axios.get(`getNumAdm.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      const adminsAmount = data[0];

      return adminsAmount;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async getGenderAmountData(gender) {
    try {
      const { data } = await axios.get(`getGender.php?gender=${gender}`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      const genderAmount = data[0];

      return genderAmount;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async getBlockAmountData() {
    try {
      const { data } = await axios.get(`getNumBlock.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      const blockAmount = data[0];

      return blockAmount;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async getActiveAmountData() {
    try {
      const { data } = await axios.get(`getNumActives.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      const activeAmount = data[0];

      return activeAmount;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async getUsersData() {
    try {
      const { data: users } = await axios.get(`getUsers.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      return users;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async getRoles(){
    try{
      const { data: roles } = await axios.get(`getRoles.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      return roles;
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }

  static async delUser(userEmail) {
    try {
      await axios.get(`delUser.php?email=${userEmail}`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });
  
      location.reload();
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }  
}
