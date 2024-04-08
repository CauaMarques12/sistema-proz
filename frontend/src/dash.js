import { API } from "./services/api.js";
import { StorageToken } from "./services/storage.js";
import { randomColor } from "./utils/random-color.js";

const token = StorageToken.get();

if (token) render();

function render() {
  renderUsersAmountData();
  renderAdminAmountData();
  renderBlockAmountData();
  renderActiveAmountData();

  renderSectorsChart();
  renderGendersChart();
}

async function renderUsersAmountData() {
  const usersAmountElement = document.getElementById("users-amount");

  const { quantidadeUsuarios: usersAmount } = await API.getUsersAmountData();

  usersAmountElement.innerText = usersAmount;
}

async function renderAdminAmountData() {
  const usersAmountElement = document.getElementById("admins-amount");

  const { administradores: adminsAmount } = await API.getAdminAmountData();

  usersAmountElement.innerText = adminsAmount;
}

async function renderBlockAmountData() {
  const blockAmountElement = document.getElementById("block-amount");

  const { total: totalBlock } = await API.getBlockAmountData();

  blockAmountElement.innerText = totalBlock;
}

async function renderActiveAmountData() {
  const activeAmountElement = document.getElementById("active-amount");

  const { total: totalActive } = await API.getActiveAmountData();

  activeAmountElement.innerText = totalActive;
}

const ctx = document.getElementById("lineChart");
async function renderSectorsChart() {
  const roles = await API.getRoles();
  const datasetsChart = [];

  for (const role of roles) {
    const tempJson = {
      label: role.setor,
      data: [role.quantidadeUsuarios],
      backgroundColor: [randomColor()], // Gera uma cor aleatória para cada conjunto de dados
      borderColor: ["#f97316"],
      borderWidth: 1,
    };

    datasetsChart.push(tempJson);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Setores"],
      datasets: datasetsChart,
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

const cty = document.getElementById("doughnut");
async function renderGendersChart() {
  const [maleGenderAmount, femaleGenderAmount] = await Promise.all([
    API.getGenderAmountData("M"),
    API.getGenderAmountData("F"),
  ]);

  new Chart(cty, {
    type: "doughnut",
    data: {
      labels: ["Masculino", "Feminino"],
      datasets: [
        {
          label: "Gênero por Usuário",
          data: [maleGenderAmount.genero, femaleGenderAmount.genero],
          backgroundColor: ["#f97316", "#00"],
          // borderColor: ["#f97316"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}
