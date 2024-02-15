import React from 'react';
import { Chart as ChartJS, LineElement, PointElement, LinearScale } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    LineElement,
    PointElement,
    LinearScale
);

const LineChart = () => {
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
            label: 'My First Dataset',
            data: [5, 9, 8, 1, 6, 5, 4],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.01,
        }]
    };

    var options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div style={{ width: '300px', height: '200px' }}>
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
