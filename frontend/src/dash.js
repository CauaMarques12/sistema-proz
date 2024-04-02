document.getElementById('open_btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open-sidebar');
});




const ctx = document.getElementById('dash1');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
    datasets: [{
      label: 'Numero de Acessos',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      backgroundColor: 'rgb(255, 99, 132 )'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      }
    }
});