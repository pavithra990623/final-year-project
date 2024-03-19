import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to redirect users
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../firebase.Config'; // Correct import
import { collection, doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext'; // Import your authentication context
import "./Profile.css";

const Profile = () => {
  const history = useNavigate(); // Initialize useHistory hook
  const { user } = useAuth(); // Access the current user from your authentication context
  const [userData, setUserData] = useState(null);
  const [profiled, setProfiled] = useState(null); // Define profiled state

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        // If there is no logged-in user, redirect to the login page
        history.push('/login');
        return;
      }

      try {
        const userDocRef = doc(db, 'Auth', user.uid);
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

    fetchUserData();
  }, [user, history]);

  // Define handleUpdateprofiled function
  const handleUpdateprofiled = (id) => {
    console.log('Update profile for id:', id);
    // Implement your update logic here
  };

  // Define handleDeleteprofiled function
  const handleDeleteprofiled = (id) => {
    console.log('Delete profile for id:', id);
    // Implement your delete logic here
  };


  return (
    <div>
      <Header />
      <div className='profile-container'>
        <h2>Profile Page</h2>
        {userData ? (
          <ul>
            {/* Mapping userData directly as it's an object, not an array */}
            <li>
              <p>Email: {userData.Email}</p>
              <p>Username: {userData.Username}</p>
              <p>Age: {userData.Age}</p>
              <p>Date of Birth: {userData.Dob}</p>
              <p>Gender: {userData.Gender}</p>
              <p>Address: {userData.Address}</p>
              <p>Contact Number: {userData.ContactNumber}</p>
              <p>Allergies: {userData.Allergies}</p>
            </li>
          </ul>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>

      {/* Edit and update buttons */}
      <button3 onClick={() => handleUpdateprofiled(profiled?.id)}>Update</button3> 
      <br></br> <br></br>
      <button4 onClick={() => handleDeleteprofiled(profiled?.id)}>Delete</button4>
      <br></br><br></br>

      <p>Collect Your Test Results Here</p>
      <br></br>
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
            <td><input type="text" placeholder="Enter blood pressure" /></td>
            <td><input type="text" placeholder="Enter sugar level" /></td>
            <td><button5>Submit</button5></td>
          </tr>
        </tfoot>
      </table>

      <Footer />
    </div>
  );
};

export default Profile;
