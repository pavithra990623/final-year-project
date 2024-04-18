import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { db, imagedb } from '../firebase.Config';
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, getDocs, deleteDoc, editDoc } from 'firebase/firestore'; // Import editDoc
import { doc } from 'firebase/firestore';


import './Lab.css';
import './Register.css';

const Lab = () => {
  const [reports, setReports] = useState([]);
  const [newReport, setNewReport] = useState({ patientName: "", reportType: "", date: "" });
  const [img, setImg] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const reportsRef = collection(db, 'labReports');
      const snapshot = await getDocs(reportsRef);
      const reportsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReports(reportsData);
    };
    fetchData();
  }, []);

  const handleClick = async () => {
    const storageRef = ref(imagedb, `files/${uuidv4()}`);
    await uploadBytes(storageRef, img);
    const imageUrl = await getDownloadURL(storageRef);
    const newReportWithImage = { ...newReport, imageUrl };
    await addDoc(collection(db, 'labReports'), newReportWithImage);
    setReports([...reports, newReportWithImage]);
    setNewReport({ patientName: "", reportType: "", date: "" });
  };

  const handleDeleteReport = async (id) => {
    await deleteDoc(doc(db, 'labReports', id));
    setReports(reports.filter(report => report.id !== id));
  };

  const handleEditReport = async (id) => { // Define handleEditReport function
    // Perform edit operation here
    console.log(`Editing report with ID: ${id}`);
  };

  return (
    <div>
      <Header />
      <div className="lab-container">
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

          <h3>The image of the Report</h3>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <br />
          <button type="button" onClick={handleClick}>Upload</button>
        </form>

        <h2>Lab Reports</h2>
        <table className="lab-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient Name</th>
              <th>Report Type</th>
              <th>Date</th>
              <th>Image</th>
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
                  {report.imageUrl && <img src={report.imageUrl} alt="Report" style={{ width: '100px', height: 'auto' }} />}
                </td>
                <td>
                  <button1 onClick={() => handleEditReport(report.id)}>Edit</button1> {/* Use handleEditReport function */}
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
