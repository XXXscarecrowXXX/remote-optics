// Add your JavaScript code here, such as dynamic behavior and chart initialization
document.addEventListener('DOMContentLoaded', function () {
    // Example: Initialize a chart using Chart.js
    var ctx = document.getElementById('productivityChart').getContext('2d');
    var productivityChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            datasets: [{
                label: 'Tasks Completed',
                data: [15, 22, 18, 25, 20],
                backgroundColor: 'rgba(0, 123, 255, 0.7)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
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
});
