import { setFormError } from "../utils/set-form-error.js";
import { StorageToken } from "../services/storage.js";

axios.defaults.baseURL = "http://localhost:3000";

export class API {
  static async login(formData) {
    try {
      const { data: token } = await axios.post("login.php", formData);

      StorageToken.set(token);

      window.location.href = "index.html";
    } catch (e) {
      setFormError(e.response.data);
    }
  }

  static async sign(formData) {
    try {
      await axios.post("register.php", formData);

      this.login(formData);
    } catch (e) {
      setFormError(e?.response?.data || JSON.stringify(e));
    }
  }
}
