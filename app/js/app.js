// barChart
const barChart = document.getElementById('barChart');

const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: 'Customers',
            data: ["490", "200", "200", "200", "500", "350", "450", "450", "450", "400", "450", "450"],
            backgroundColor: "#303f9f",

        },
        {
            label: 'Users',
            data: ["220", "100", "120", "140", "200", "100", "400", "200", "150", "180", "300", "350"],
            backgroundColor: "#3f51b5",
        },
    ]
};

new Chart(barChart, {
    type: 'bar',
    data: barChartData,
    options: {
        layout: {
            padding: {
                top: 10
            }
        },
        plugins: {
            title: {
                display: false,
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    },
});

// pieChart
const pieChart = document.getElementById('pieChart');

const pieChartData = {
    labels: [
        'Chrome',
        'Safari',
        'Firefox'
    ],
    datasets: [{
        data: [220, 50, 100],
        backgroundColor: [
            '#303f9f',
            '#38b4ee',
            '#4caf50'
        ],
        hoverOffset: 4
    }]
};
new Chart(pieChart, {
    type: 'pie',
    data: pieChartData,
    options: {
        layout: {
            padding: {
                top: 15,
                right: 10,
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "right",
                labels: {
                    boxWidth: 15,
                    boxHeight: 15,
                }
            },
        },
        responsive: true,
    },
});