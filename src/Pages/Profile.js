// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { db } from '../firebase.Config';
// import { collection, doc, addDoc, getDoc } from 'firebase/firestore'; // Import getDoc
// import { useAuth } from '../context/AuthContext';
// import Chart from 'chart.js/auto'; // Import Chart.js


//  import "./Profile.css";

// const Profile = () => {
//   const history = useNavigate();
//   const { user } = useAuth();
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!user) {
//         history.push('/login');
//         return;
//       }

//       try {
//         const userDocRef = doc(db, 'Auth', user.uid);
//         const userDocSnapshot = await getDoc(userDocRef); // Use getDoc function
//         if (userDocSnapshot.exists()) {
//           setUserData(userDocSnapshot.data());
//         } else {
//           console.log('User document does not exist');
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, [user, history]);

//   const handleSaveRecord = async () => {
//     const bloodPressure = document.getElementById('bloodPressure').value;
//     const sugarLevel = document.getElementById('sugarLevel').value;

//     try {
//       await addDoc(collection(db, 'userRecords'), {
//         userId: user.uid,
//         bloodPressure,
//         sugarLevel,
//         timestamp: new Date().toISOString()
//       });
//       console.log('Record saved successfully.');
//     } catch (error) {
//       console.error('Error saving record:', error);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className='profile-container'>
//         <h2>Profile Page</h2>
//         {userData ? (
//           <ul>
//             <li>
//               <p>Email: {userData.Email}</p>
//               <p>Username: {userData.Username}</p>
//               {/* Display other user information */}
//             </li>
//           </ul>
//         ) : (
//           <p>Loading user data...</p>
//         )}
//       </div>

//       <p>Collect Your Test Results Here</p>
//       <br />

//       {/* Buttons for Edit and Delete */}
//       <button4 onClick={() => console.log('Edit button clicked')}>Edit</button4>
//       <button5 onClick={() => console.log('Delete button clicked')}>Delete</button5>
//       <br></br><br></br>

//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Blood Sugar Level</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* Render table rows for existing readings */}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td><input type="date" id="date" placeholder="Select date" /></td>
//             <td><input type="text" id="bloodPressure" placeholder="Enter blood pressure" /></td>
//             <td><input type="text" id="sugarLevel" placeholder="Enter sugar level" /></td>
//             <br></br><br></br>
//             <td><button6 onClick={handleSaveRecord}>Save Record</button6></td>
//           </tr>
//         </tfoot>
//       </table>

//       <Footer />
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chart from 'chart.js/auto';
import './Profile.css';

function Profile() {
  const [chartData, setChartData] = useState({
    labels: ['2024.3.24', '2024.3.25', '2024.3.26'],
    datasets: [{
      label: 'Blood Sugar Level',
      data: [100, 200, 300, 400, 500, 600],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  });

  useEffect(() => {
    renderChart();
  }, []);

  const renderChart = () => {
    const ctx = document.getElementById('myChart');
    if (Chart.getChart(ctx)) {
      Chart.getChart(ctx).destroy();
    }
    new Chart(ctx, {
      type: 'line',
      data: chartData,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  };

  const handleAddData = () => {
    const dateInput = document.getElementById('date');
    const bloodPressureInput = document.getElementById('bloodPressure');
    const sugarLevelInput = document.getElementById('sugarLevel');

    const date = dateInput.value;
    const bloodPressure = bloodPressureInput.value;
    const sugarLevel = sugarLevelInput.value;

    // Add new data to the chart
    setChartData({
      ...chartData,
      labels: [...chartData.labels, date],
      datasets: [{
        ...chartData.datasets[0],
        data: [...chartData.datasets[0].data, bloodPressure]
      }]
    });

    // Update the chart
    renderChart();

    // Clear input fields after adding data
    dateInput.value = '';
    bloodPressureInput.value = '';
    sugarLevelInput.value = '';
  };

  return (
    <div>
      <Header />
      <div className='profile-container'>
        <h2>About Me</h2>
        {/* Display user details
        <div>
        <p><strong>Username:</strong> Johnny</p>
          <p><strong>Email:</strong> Johnny@gmail.com</p>
          <p><strong>Age:</strong> 33</p>
          <p><strong>Gender:</strong> male</p>
          <p><strong>Dob:</strong> 2024-02-08</p>
          <p><strong>Address:</strong></p>
          <p><strong>Contact Number:</strong> 1234567898765</p>
          <p><strong>Allergies:</strong> vaccine allergy on peniciline, can't eat pineapple</p>
        </div> */}
      </div>

      {/* Display Chart
      <div className='chart-container'>
        <canvas id='myChart'></canvas>
      </div> */}

      {/* Buttons for Edit and Delete */}
      <div className='button-container'>

       {/* Add button to save record */}

       <button onClick={handleAddData}>Add Record</button><br></br><br></br>

      {/* Add button to save record */}
      <button onClick={handleAddData}>Save Record</button> <br></br><br></br>
      </div>

      {/* Table for recording */}
      <div className='record-table'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Mesurement</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows for existing readings */}
          </tbody>
          <tfoot>
            <tr>
              <td><input type='date' id='date' placeholder='Select date' /></td>
              <td><input type='text' id='bloodPressure' placeholder='Enter the Mesurement' /></td>
              {/* Remove the button from here */}
            </tr>
          </tfoot>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;


