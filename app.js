import {StorageToken} from "./storage.js"

const logOutButton = document.getElementById("logout");
const token = StorageToken.get();

if (!token) {
  document.body.innerText =
    "Você precisa estar logado para acessar esta página. Redirecionando em 5 segundos...";

  setTimeout(() => {
    window.location.href = "sign.html";
  }, 5 * 1000);
}

logOutButton.addEventListener("click", () => {
  StorageToken.remove();

  window.location.href = "sign.html";
});
