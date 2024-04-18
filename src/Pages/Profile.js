import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../firebase.Config'; // Import Firebase Firestore instance
import { doc, getDoc } from 'firebase/firestore';

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Function to fetch user data from Firestore
    const fetchUserData = async () => {
      // Replace 'userUid' with the actual UID of the logged-in user
      const userUid = 'replace-with-actual-user-uid';
      
      try {
        const userDocRef = doc(db, 'users', userUid); // Assuming 'users' is your collection name
        const userDocSnapshot = await getDoc(userDocRef);
        
        if (userDocSnapshot.exists()) {
          setUserData(userDocSnapshot.data());
        } else {
          console.log('User document does not exist');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData(); // Fetch user data when the component mounts
  }, []);

  return (
    <div>
      <Header />
      <div className='profile-container'>
        <h2>About Me</h2>
        {/* Placeholder for displaying user data */}
        {/* {userData && (
          <div>
            <p><strong>Username:</strong> {userData.Username}</p>
            <p><strong>Email:</strong> {userData.Email}</p>
            <p><strong>Age:</strong> {userData.Age}</p>
            <p><strong>Gender:</strong> {userData.Gender}</p>
            <p><strong>Dob:</strong> {userData.Dob}</p>
            <p><strong>Address:</strong> {userData.Address}</p>
            <p><strong>Contact Number:</strong> {userData.ContactNumber}</p>
            <p><strong>Allergies:</strong> {userData.Allergies}</p>
          </div>
        )} */}
      </div>

      <div className='chart-container'>
        <canvas id='myChart'></canvas>
      </div>

      <div className='button-container'>
        <button onClick="">Add Record</button>
      </div>

      <div className='record-table'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Measurement</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows for existing readings */}
          </tbody>
          <tfoot>
            <tr>
              <td><input type='date' id='date' placeholder='Select date' /></td>
              <td><input type='text' id='bloodPressure' placeholder='Enter the Measurement' /></td>
            </tr>
          </tfoot>
        </table>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
