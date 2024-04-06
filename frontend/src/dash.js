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
    aspectRatio: 0.8,
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    },
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
  type: 'line',
  data: {
    labels: ['Financeiro', 'Adm', 'TI', 'Conservação'],
    datasets: [{
      label: ['Numero de Usuário por Setor'],
      data: [12, 23, 9 ,17],
      borderWidth: 1,
      backgroundColor: ['rgb(255, 99, 132 )', '#ff6600',]
    }]
  },
  options: {
    interaction: {
      mode: 'index',
      intersect: false,
    },
    aspectRatio: 0.8,
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