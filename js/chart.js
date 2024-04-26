document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.createElement('canvas');
    ctx.classList.add('chart');
    document.querySelector('.chart-viso').appendChild(ctx);

    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Craft Market Size from 2020-2024',
                data: [41.1, 43.36, 45.74, 48.26, 50.1],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var ctx1 = document.createElement('canvas');
    ctx1.classList.add('chart');
    document.querySelector('.chart-viso').appendChild(ctx1);

    var barChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['China', 'UK', 'USA'],
            datasets: [{
                label: 'Top Art Markets',
                data: [17, 18, 45],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ], // Set background color to blue with opacity
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    ticks: {
                        callback: function (value) {
                            return value + '%'; // Append '%' to the y-axis tick labels
                        }
                    }
                }
            }
        }
    });

    var ctx2 = document.createElement('canvas');
    ctx2.classList.add('chart-container');
    document.querySelector('.chart-viso').appendChild(ctx2);

    var doughnutChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['49% of US people involved in craft activites'],
            datasets: [{
              label: 'My First Dataset',
              data: [49, 51],
              backgroundColor: [
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
        },
    })
});
