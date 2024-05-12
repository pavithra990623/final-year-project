import React, { useState, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const DummyLineChart = () => {
  const [displayIndex, setDisplayIndex] = useState(0); // Initialize display index
  const values = [54.38, 43.17, 44.8, 41.38, 55.68]; // Dummy values
  const chartRef = useRef(null); // Ref for the chart component
  const [chartLoaded, setChartLoaded] = useState(false); // Flag to indicate whether the chart has loaded

  const handleDisplayNextValue = () => {
    if (displayIndex < values.length) {
      console.log("Displaying value:", values[displayIndex]); // Log the current value
      setDisplayIndex(displayIndex + 1); // Increment display index
    } else {
      console.log("All values displayed");
    }
  };

  // Generate text labels for each value
  const getTextLabel = (index) => {
    return `Serum Creatinine Level ${index + 1}`;
  };

  const handleUpload = () => {
    console.log("Upload button clicked"); // Add your upload logic here
  };

  const handleSaveChart = () => {
    if (chartLoaded && chartRef.current) { // Check if the chart has loaded before accessing chartInstance
      const chartImage = chartRef.current.chartInstance.toDataURL('image/png'); // Convert chart to image
      downloadImage(chartImage, 'chart.png'); // Download the chart image
    }
  };

  const downloadImage = (data, filename) => {
    const link = document.createElement('a');
    link.href = data;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <h1> Chart Display</h1>
      <Link to="/profile">
      <button>Back to Profile</button>
    </Link>
      <br></br><br></br>
      <input type="file" onChange={handleUpload} multiple />
      <button onClick={handleDisplayNextValue}>Display </button>
      <button onClick={handleSaveChart}>Save Chart</button> {/* Add a button to save the chart */}
      <br />
      <br />
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <LineChart
            ref={chartRef} // Set the ref for the LineChart component
            width={500}
            height={300}
            data={values.slice(0, displayIndex + 1).map((value, index) => ({ value, name: getTextLabel(index) }))}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            onLoad={() => setChartLoaded(true)} // Set chartLoaded flag when the chart is loaded
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DummyLineChart;
