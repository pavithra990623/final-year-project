import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ chartData }) => {
  useEffect(() => {
    if (!chartData) return; // Early return if chartData is null or undefined

    const labels = chartData.map(data => data.text);
    const values = chartData.map(data => data.value);

    const ctx = document.getElementById('myChart');
    if (!ctx) return; // Exit if canvas element is not found

    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Chart Data',
          data: values,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
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

    return () => {
      myChart.destroy(); // Cleanup chart instance when component unmounts
    };
  }, [chartData]);

  return <canvas id="myChart" width="400" height="400"></canvas>;
};

export default ChartComponent;