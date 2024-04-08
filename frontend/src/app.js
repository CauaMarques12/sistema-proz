import { API } from "./services/api.js";
import { StorageToken } from "./services/storage.js";

const token = StorageToken.get();

if (!token) {
  document.body.innerHTML =
    "<div class='unauthorized'><p>Você precisa estar logado para acessar esta página. Redirecionando em 5 segundos...</p></div>";

  setTimeout(() => {
    window.location.href = "sign.html";
  }, 5 * 1000);
} else render();

async function render() {
  const userData = await API.getUserData();

  showAllUsersSidebarItemIfAdmin({ isAdmin: userData.setor == "admin" });
  renderUserData(userData);
}

async function showAllUsersSidebarItemIfAdmin({ isAdmin }) {
  if (!isAdmin) return;

  document.querySelector("#usuariosLi").style.display = "block";
  document.querySelector("#usuariosLi").style.visibility = "visible";
}

async function renderUserData(userData) {
  const usernameElement = document.getElementById("username");
  const descriptionElement = document.getElementById("description");

  const { nome: username, email, setor: sector, genero: gender } = userData;

  usernameElement.innerText = username;
  descriptionElement.innerText = `${email}\n ${sector ? sector + "\n" : ""} ${
    gender == "M" ? "Masculino" : "Feminino"
  }`;
}

const logOutButton = document.getElementById("logout");
logOutButton.addEventListener("click", () => {
  StorageToken.remove();
  window.location.href = "sign.html";
});

document
  .getElementById("open_btn")
  .addEventListener("click", () =>
    document.getElementById("sidebar").classList.toggle("open-sidebar")
  );
