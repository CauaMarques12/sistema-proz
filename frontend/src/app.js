import { API } from "./services/api.js";
import { StorageToken } from "./services/storage.js";

const logOutButton = document.getElementById("logout");

const token = StorageToken.get();
if (!token) {
  document.body.innerHTML =
    "<div class='unauthorized'><p>Você precisa estar logado para acessar esta página. Redirecionando em 5 segundos...</p></div>";

  setTimeout(() => {
    window.location.href = "sign.html";
  }, 5 * 1000);
}

logOutButton.addEventListener("click", () => {
  StorageToken.remove();

  window.location.href = "sign.html";
});

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


renderCountData();

async function renderCountData() {
  const usersCount = document.getElementById("TotalUsers");

  const { quantidadeUsuarios: qntusers} = await API.getCountData();

  usersCount.innerText = qntusers;
};