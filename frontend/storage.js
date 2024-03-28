const TOKEN_KEY = "token";

export class StorageToken {
  static get() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  static set(newToken) {
    sessionStorage.setItem(TOKEN_KEY, newToken);
  }

  static remove() {
    sessionStorage.removeItem(TOKEN_KEY);
  }
}
