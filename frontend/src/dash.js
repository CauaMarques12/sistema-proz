document.getElementById('open_btn').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open-sidebar');
});




const ctx = document.getElementById('dash4');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Masculino', 'Feminino'],
    datasets: [{
      label: ['Pessoas por Gênero'],
      data: [53, 47],
      borderWidth: 1,
      backgroundColor: ['rgb(255, 99, 132 )', '#ff6600',]
    }]
  },
  options: {
    aspectRatio: 1.7,
    scales: {
      y: {
        
        ticks: {
          display: false
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        min: 0,
        max: 100,
      },
      x: {
        ticks: {
          display: false
        },

        grid: {
          drawOnChartArea: false,
          drawTicks: false,

        },
      },
    },
    responsive: true,
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false,
      },
    },
  }
}
);




const cty = document.getElementById('dash5');

new Chart(cty, {
  type: 'bar',
  data: {
    labels: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN'],
    datasets: [{
      label: ['Numero de Acessos'],
      data: [28, 19, 25, 32, 78, 43],
      borderWidth: 1,
      backgroundColor: ['rgb(255, 99, 132 )', '#ff6600',]
    }]
  },
  options: {
    aspectRatio: 1.7,
    scales: {
      y: {
        ticks: {
          display: false
        },
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
        min: 0,
        max: 100,
      },
      x: {
        
        grid: {
          drawOnChartArea: false,
          drawTicks: false,
        },
      },
    },
    responsive: true,
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: false,
      },
    },
  }
}
);