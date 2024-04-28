import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Bar } from 'react-chartjs-2';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrResult, setOcrResult] = useState('');
  const [chartData, setChartData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    // Log the FormData object to the console
    console.log(formData);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Set OCR result in state
      setOcrResult(response.data.text);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleAnalyse = () => {
    // Split the OCR result string into an array of numbers
    const numbers = ocrResult.split(',').map(Number);

    // Set chart data
    setChartData({
      labels: numbers.map((_, index) => `Value ${index + 1}`), // Label each value with an index
      datasets: [
        {
          label: 'OCR Data',
          data: numbers,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    });
};

  return (
    <div>
      <Header />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {ocrResult && (
        <button onClick={handleAnalyse}>Analyse</button>
      )}
      <div>
        {ocrResult && (
          <div>
            <h2>OCR Result:</h2>
            <p>{ocrResult}</p>
          </div>
        )}
      </div>
      <div>
        {chartData && (
          <div>
            <h2>Chart</h2>
            <Bar data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
