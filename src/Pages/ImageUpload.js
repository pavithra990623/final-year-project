import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [ocrResult, setOcrResult] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await axios.post('http://your-backend-url/upload', formData, {
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

  return (
    <div>
    <Header/>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <div>
        {ocrResult && (
          <div>
            <h2>OCR Result:</h2>
            <p>{ocrResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
