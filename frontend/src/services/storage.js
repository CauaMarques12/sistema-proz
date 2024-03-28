export class StorageToken {
  static TOKEN_KEY = "token";

  static get() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  static set(newToken) {
    sessionStorage.setItem(this.TOKEN_KEY, newToken);
  }

  static remove() {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
