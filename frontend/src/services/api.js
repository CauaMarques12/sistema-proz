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
      const { data: users } = await axios.get(`getProfile.php`, {
        headers: { Authorization: `Bearer ${StorageToken.get()}` },
      });

      return users[0];
    } catch (e) {
      alert(getMessageAndInputIdFromError(e).errorMessage);
    }
  }
}
