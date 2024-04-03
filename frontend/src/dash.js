document.getElementById('open_btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open-sidebar');
});




const ctx = document.getElementById('dash');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
    datasets: [{
      label: ['Numero de Acessos', 'Julio gay,'],
      data: [28, 19, 25, 32, 78, 43],
      borderWidth: 1,
      backgroundColor: ['rgb(255, 99, 132 )', '#ff6600',]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },

    responsive: true,
    width: 550, 
    animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: false,
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




const cty = document.getElementById('dash');

new Chart(cty, {
  type: 'bar',
  data: {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
    datasets: [{
      label: ['Numero de Acessos', 'Julio gay,'],
      data: [28, 19, 25, 32, 78, 43],
      borderWidth: 1,
      backgroundColor: ['rgb(255, 99, 132 )', '#ff6600',]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    responsive: true,
    animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: false,
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