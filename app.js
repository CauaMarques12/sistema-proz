const logOutButton = document.getElementById("logout");
const user = localStorage.getItem("user");

if (!user) {
  document.body.innerText =
    "Você precisa estar logado para acessar esta página. Redirecionando em 5 segundos...";

  setTimeout(() => {
    window.location.href = "sign.html";
  }, 5 * 1000);
}

logOutButton.addEventListener("click", () => {
  localStorage.removeItem("user");

  window.location.href = "sign.html";
});
