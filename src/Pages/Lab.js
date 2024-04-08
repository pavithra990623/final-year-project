// Lab.js
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { imagedb } from '../firebase.Config';
import { v4 as uuidv4 } from 'uuid'; // Import statement for v4
import './Lab.css';
import './Register.css';
import { ref, uploadBytes } from 'firebase/storage'; // Import ref and uploadBytes

const Lab = () => {
  // State for managing reports
  const [reports, setReports] = useState([
    { id: 1, patientName: "", reportType: "", date: "" },
    { id: 2, patientName: "", reportType: "", date: "" },
    // Add more sample data as needed
  ]);

  // State for managing a new report
  const [newReport, setNewReport] = useState({
    patientName: "",
    reportType: "",
    date: "",
  });

  // State for managing the image file
  const [img, setImg] = useState(null);

  // Function to handle image upload
  const handleClick = () => {
    const storageRef = ref(imagedb, `files/${uuidv4()}`); // Generate a unique file path
    uploadBytes(storageRef, img).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    }).catch((error) => {
      console.error('Error uploading file:', error);
    });
  };

  // Function to add a new report
  const handleAddReport = () => {
    setReports([...reports, { id: reports.length + 1, ...newReport }]);
    setNewReport({ patientName: "", reportType: "", date: "" });
  };

  // Function to update a report (not implemented in this example)
  const handleUpdateReport = (id) => {
    console.log(`Update report with ID: ${id}`);
  };

  // Function to delete a report
  const handleDeleteReport = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="lab-container">

      {/* Form to add a new report */}
        <h3>Add New Report</h3>
        <form>
          <label>
            Patient Name
            <input
              type="text"
              value={newReport.patientName}
              onChange={(e) => setNewReport({ ...newReport, patientName: e.target.value })}
            />
          </label>
          <br />

          <label>
            Report Type
            <input
              type="text"
              value={newReport.reportType}
              onChange={(e) => setNewReport({ ...newReport, reportType: e.target.value })}
            />
          </label>
          <br />

          <label>
            Date
            <input
              type="date"
              value={newReport.date}
              onChange={(e) => setNewReport({ ...newReport, date: e.target.value })}
            />
          </label>
          <br />

          {/* File input for uploading an image */}
          <h3>The image of the Report</h3>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <br />
          <button onClick={handleClick}>Upload</button>
        </form>


        {/* Table to display existing reports */}
        <h2>Lab Reports</h2>
        <table className="lab-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Report Type</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.id}</td>
                <td>{report.patientName}</td>
                <td>{report.reportType}</td>
                <td>{report.date}</td>
                <td>
                  <button1 onClick={() => handleUpdateReport(report.id)}>Update</button1>
                  <button2 onClick={() => handleDeleteReport(report.id)}>Delete</button2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        
      </div>
      <Footer />
    </div>
  );
};

export default Lab;
