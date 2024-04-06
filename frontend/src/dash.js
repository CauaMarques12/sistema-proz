document.getElementById('open_btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open-sidebar');
});



// Dashboard 1
const ctx = document.getElementById('lineChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Financeiro', 'Administração', 'TI', 'Conservação', 'Manutenção'],
      datasets: [{
        label: 'Usuários',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor : ['#f97316'],
        borderColor : ['#f97316'],
        borderWidth: 1
      }]
    },
    options: {
      responsive : true,
    }
  });


// Dashboard 2
const cty = document.getElementById('doughnut');

new Chart(cty, {
  type: 'doughnut',
  data: {
    labels: ['Masculino', 'Femininp'],
    datasets: [{
      label: 'Gênero por Usuário',
      data: [57, 43],
      backgroundColor : ['#f97316', '#00'],
      borderColor : ['#f97316'],
      borderWidth: 1
    }]
  },
  options: {
    responsive : true,
  }
});