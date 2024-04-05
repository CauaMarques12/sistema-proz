Como executar back-end local : https://github.com/CauaMarques12/sistema-proz/pull/2#issue-2212375807 




document.getElementById("open_btn").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("open-sidebar");
});

const ctx = document.getElementById("dash5");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
    datasets: [
      {
        label: ["Numero de Acessos", "Julio gay,"],
        data: [28, 19, 25, 32, 78, 43],
        borderWidth: 1,
        backgroundColor: ["rgb(255, 99, 132 )", "#ff6600"],
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
        },
        beginAtZero: true,
      },
    },
    responsive: true,
    width: 550,
    //maintainAspectRatio: false,
    aspectRatio: 1.7,
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: false,
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100,
      },
    },
  },
});

window.addEventListener("beforeprint", () => {
  dash5.style.width = "550px";
  dash5.style.height = "300px";
  chart5.resize();
});

// Redimensionar o gráfico quando o layout de impressão for desativado
window.addEventListener("afterprint", () => {
  dash5.style.width = "100%";
  dash5.style.height = "100%";
  chart5.resize();
});

const cty = document.getElementById("dash4");

new Chart(cty, {
  type: "bar",
  data: {
    labels: ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN"],
    datasets: [
      {
        label: ["Numero de Acessos", "Julio gay,"],
        data: [28, 19, 25, 32, 78, 43],
        borderWidth: 1,
        backgroundColor: ["rgb(255, 99, 132 )", "#ff6600"],
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
        },
        beginAtZero: true,
      },
    },
    responsive: true,
    //maintainAspectRatio: false,
    aspectRatio: 1.7,
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: false,
      },
    },
    scales: {
      y: {
        // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100,
      },
    },
  },
});

