import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
);

const BarChart = () => {
    var data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    };

    var Options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend: {
            labels: {
                fontSize: 16 // Adjust the legend font size
            }
        }
    };

    return (
        <div style={{ width: '300px', height: '200px' }}> {/* Apply CSS to the container div */}
            <Bar
                data={data}
                height={400}
                options={Options}
            />
        </div>
    );
};

export default BarChart;
