import { API } from "./services/api.js";

renderUsersAmountData();

async function renderUsersAmountData() {
  const usersAmountElement = document.getElementById("users-amount");

  const { quantidadeUsuarios: usersAmount } = await API.getUsersAmountData();

  usersAmountElement.innerText = usersAmount;
}

renderAdminAmountData()

async function renderAdminAmountData() {
  const usersAmountElement = document.getElementById("admins-amount");

  const { administradores: adminsAmount } = await API.getAdminAmountData();

  usersAmountElement.innerText = adminsAmount;
}

// Dashboard 1
const ctx = document.getElementById("lineChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Financeiro", "Administração", "TI", "Conservação", "Manutenção"],
    datasets: [
      {
        label: "Usuários",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["#f97316"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
});

// Dashboard 2
const cty = document.getElementById("doughnut");

new Chart(cty, {
  type: "doughnut",
  data: {
    labels: ["Masculino", "Feminino"],
    datasets: [
      {
        label: "Gênero por Usuário",
        data: [57, 43],
        backgroundColor: ["#f97316", "#00"],
        borderColor: ["#f97316"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});
