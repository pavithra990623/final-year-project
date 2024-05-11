import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Manualmes.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Manualmes() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');
  const [measurement, setMeasurement] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleAddData = () => {
    const newData = [...data, { date: date, measurement: measurement }];
    setData(newData);
    setDate('');
    setMeasurement('');
  };
  
  const handleNavigateToProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h1>Manual Measurements</h1>
      <div>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          value={measurement}
          onChange={(e) => setMeasurement(e.target.value)}
        />
        <button onClick={handleAddData}>Add</button>
        <button onClick={handleNavigateToProfile}>Back</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Measurement</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.measurement}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br><br></br><br></br>
      {data.length > 0 && (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="measurement" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Manualmes;
