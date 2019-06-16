const doughnutChartContext = document.getElementById('doughnut-chart-canvas').getContext('2d');


export const doughnutChart = new Chart(doughnutChartContext, {
    type: 'doughnut',
    data: {
        labels: ['Phone', 'Tablets', 'Desktop'],
        datasets: [{
            data: [180, 280, 125],
            backgroundColor: [
                '#549e8f',
                '#62629B',
                'rgba(18, 166, 60, 0.925)'
            ],
            borderColor: 'rgba(98,98,155, 0.2)',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
            }
        },
    }
});