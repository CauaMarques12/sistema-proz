import { API } from "./services/api.js";
import { StorageToken } from "./services/storage.js";

const token = StorageToken.get();
if (!token) {
  document.body.innerHTML =
    "<div class='unauthorized'><p>Você precisa estar logado para acessar esta página. Redirecionando em 5 segundos...</p></div>";

  setTimeout(() => {
    window.location.href = "sign.html";
  }, 5 * 1000);
}

token && render();

function render() {
  const logOutButton = document.getElementById("logout");
  logOutButton.addEventListener("click", () => {
    StorageToken.remove();
    window.location.href = "sign.html";
  });

  renderUserData();
  renderUsersAmountData();
}

renderUserData();

async function renderUserData() {
  const usernameElement = document.getElementById("username");
  const descriptionElement = document.getElementById("description");

  const { nome: username, email, setor: sector, genero: gender } = await API.getUserData();

  usernameElement.innerText = username;
  descriptionElement.innerText = `${email}\n ${sector ? sector + "\n" : ""} ${
    gender == "M" ? "Masculino" : "Feminino"
  }`;
}

renderUsersAmountData();

async function renderUsersAmountData() {
  const usersAmountElement = document.getElementById("users-amount");

  const { quantidadeUsuarios: usersAmount } = await API.getUsersAmountData();

  usersAmountElement.innerText = usersAmount;
}
