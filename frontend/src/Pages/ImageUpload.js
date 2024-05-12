import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import ChartComponent from '../components/ChartComponent';
import './ImageUpload.css'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrResult, setOcrResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [chartData, setChartData] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);

      // Set OCR result in state
      setOcrResult(response.data.text);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStoreData = async () => {
    try {
      setLoading(true);
      // Send OCR result to backend to store in Firebase
      const response = await axios.post('http://localhost:3001/store-data', { ocrResult });

      console.log('Data stored in Firebase:', response.data);
    } catch (error) {
      console.error('Error storing data in Firebase:', error);
    } finally {
      setLoading(false);
    }
  };

  // for view the chart with mesurements that stored in the db
  const handleViewChart = async () => {
    try {
      setLoading(true);
      // Fetch chart data from the database
      const response = await axios.get('http://localhost:3001/chart/get');
      setChartData(response.data);
    } catch (error) {
      console.error('Error fetching chart data:', error);
    } finally {
      setLoading(false);
    }
  };
  //viwechart end 

  return (
    <div>
      <Header />
      <h1>Test Results</h1><br></br>
      <input type="file" onChange={handleFileChange}/> 
      <button onClick={handleUpload}>Upload</button>
      {ocrResult && (
        <div>
          <h2>OCR Result:</h2>
          <p>{ocrResult}</p>
          <button onClick={handleStoreData}>Store Data in Firebase</button>
        </div>
      )}
      
      <button onClick={handleViewChart}>View Chart</button>
      {loading && <p>Loading...</p>}
      {chartData && <ChartComponent chartData={chartData} />}
    </div>
  );
};

export default ImageUpload;
