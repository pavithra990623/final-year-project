import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../firebase.Config';
import { collection, doc, addDoc, getDoc } from 'firebase/firestore'; // Import getDoc
import { useAuth } from '../context/AuthContext';

import "./Profile.css";

const Profile = () => {
  const history = useNavigate();
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        history.push('/login');
        return;
      }

      try {
        const userDocRef = doc(db, 'Auth', user.uid);
        const userDocSnapshot = await getDoc(userDocRef); // Use getDoc function
        if (userDocSnapshot.exists()) {
          setUserData(userDocSnapshot.data());
        } else {
          console.log('User document does not exist');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [user, history]);

  const handleSaveRecord = async () => {
    const bloodPressure = document.getElementById('bloodPressure').value;
    const sugarLevel = document.getElementById('sugarLevel').value;

    try {
      await addDoc(collection(db, 'userRecords'), {
        userId: user.uid,
        bloodPressure,
        sugarLevel,
        timestamp: new Date().toISOString()
      });
      console.log('Record saved successfully.');
    } catch (error) {
      console.error('Error saving record:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className='profile-container'>
        <h2>Profile Page</h2>
        {userData ? (
          <ul>
            <li>
              <p>Email: {userData.Email}</p>
              <p>Username: {userData.Username}</p>
              {/* Display other user information */}
            </li>
          </ul>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>

      <p>Collect Your Test Results Here</p>
      <br />

      <table>
        <thead>
          <tr>
            <th>Blood Pressure</th>
            <th>Sugar Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render table rows for existing readings */}
        </tbody>
        <tfoot>
          <tr>
            <td><input type="date" id="date" placeholder="Select date" /></td>
            <td><input type="text" id="bloodPressure" placeholder="Enter blood pressure" /></td>
            <td><input type="text" id="sugarLevel" placeholder="Enter sugar level" /></td>
            <td><button onClick={handleSaveRecord}>Save Record</button></td>
          </tr>
        </tfoot>
      </table>

      <Footer />
    </div>
  );
};

export default Profile;
