// Lab.js

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Lab.css";

const Lab = () => {
  const [reports, setReports] = useState([
    { id: 1, patientName: "", reportType: "", date: "" },
    { id: 2, patientName: "", reportType: "", date: "" },
    // Add more sample data as needed
  ]);

  const [newReport, setNewReport] = useState({
    patientName: "",
    reportType: "",
    date: "",
  });

  const handleAddReport = () => {
    // Add a new report
    setReports([...reports, { id: reports.length + 1, ...newReport }]);
    setNewReport({ patientName: "", reportType: "", date: "" });
  };

  const handleUpdateReport = (id) => {
    // Update a report (not implemented in this example)
    console.log(`Update report with ID: ${id}`);
  };

  const handleDeleteReport = (id) => {
    // Delete a report
    setReports(reports.filter((report) => report.id !== id));
  };

  return (
    <div>
      <Header />
      <div className="lab-container">
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
                  <button1 onClick={() => handleUpdateReport(report.id)}>
                    Update
                  </button1>
                  <button2 onClick={() => handleDeleteReport(report.id)}>
                    Delete
                  </button2>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3>Add New Report</h3>
        <form>
          <label>
            Patient Name
            <input
              type="text"
              value={newReport.patientName}
              onChange={(e) =>
                setNewReport({ ...newReport, patientName: e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Report Type
            <input
              type="text"
              value={newReport.reportType}
              onChange={(e) =>
                setNewReport({ ...newReport, reportType: e.target.value })
              }
            />
          </label>
          <br />

          <label>
            Date
            <input
              type="text"
              value={newReport.date}
              onChange={(e) =>
                setNewReport({ ...newReport, date: e.target.value })
              }
            />
          </label>
          <br />

          <button type="button" onClick={handleAddReport}>
            Add Report
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Lab;
