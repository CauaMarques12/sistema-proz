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

renderBlockAmountData()

async function renderBlockAmountData() {
  const blockAmountElement = document.getElementById("block-amount");

  const { total: totalBlock } = await API.getBlockAmountData();

  blockAmountElement.innerText = totalBlock;
}

renderActiveAmountData()

async function renderActiveAmountData() {
  const activeAmountElement = document.getElementById("active-amount");

  const { total: totalActive } = await API.getActiveAmountData();

  activeAmountElement.innerText = totalActive;
}

// Dashboard 1
const ctx = document.getElementById("lineChart");

function randomColor() {
  const hue = Math.floor(Math.random() * 30) + 15; 
  const saturation = Math.floor(Math.random() * 30) + 70; 
  const lightness = Math.floor(Math.random() * 30) + 50; 
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

Promise.all([API.getRoles()]).then((data) => {
  const datasetsChart = [];

  for (const role of data[0]) {
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
});


// Dashboard 2
const cty = document.getElementById("doughnut");

Promise.all([API.getGenderAmountData('M'), API.getGenderAmountData('F')]).then((data)=>{

  new Chart(cty, {
    type: "doughnut",
    data: {
      labels: ["Masculino", "Feminino"],
      datasets: [
        {
          label: "Gênero por Usuário",
          data: [data[0].genero, data[1].genero],
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

})


