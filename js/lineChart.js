
//Variables
const lineChartCanvas = document.getElementById('line-chart-canvas');
const lineChartCanvasContext = lineChartCanvas.getContext('2d');



export const lineChart = new Chart(lineChartCanvasContext, {
    type: 'line',
    data: {
        labels: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
        datasets: [{
            backgroundColor: 'rgba(98,98,155, 0.2)',
            borderColor: 'rgba(98,98,155, .5)',
            data: [8, 15, 21, 18, 19, 16, 25, 29, 22, 28, 18],
        }]
    },
    options: {
        maintainAspectRatio: false,
        elements: {
            line: {
                tension: 0.1,
            },
            point: {
                pointStyle: 'star',
                radius: 6,
                hoverRadius: 8,
                borderWidth: 2,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 50,
                    maxTicksLimit: 6
                }
            }]
        }
    }
});

export const updateLineChart = (data, labels, maxTick) => {
    lineChart.data.datasets[0].data = data;
    lineChart.data.labels = labels;
    lineChart.options.scales.yAxes[0].ticks.suggestedMax = maxTick;
    lineChart.update();
}