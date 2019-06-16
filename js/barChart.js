
const barChartContext = document.getElementById('bar-chart-canvas').getContext('2d');

export const barChart = new Chart(barChartContext, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [50, 120, 80, 180, 50, 200, 125],
            backgroundColor: 'rgba(98,98,155, 0.8)',
            borderColor: 'rgba(98,98,155, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMin: 0,
                    suggestedMax: 250,
                    maxTicksLimit: 6
                }
            }]
        },
        legend: {
            display: false
        },
    }
});