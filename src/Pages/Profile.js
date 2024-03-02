import React, {  useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to redirect users
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../firebase.Config'; // Correct import
import { collection, doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext'; // Import your authentication context

const Profile = () => {
  const history = useNavigate(); // Initialize useHistory hook
  const { user } = useAuth(); // Access the current user from your authentication context
  const [userData, setUserData] = useState(null);
  

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


  return (
    <div>
      <Header />
      <div className='profile-container'>
        <h2>Profile Page</h2>
        {userData ? (
          <ul>
          {userData.map((user) => (
              <li key={user.id}>
                   <p>Email: {user.Email}</p>
                   <p>Username: {user.Username}</p>
                   <p>Age: {user.Age}</p>
                   <p>Date of Birth: {user.Dob}</p>
                   <p>Gender: {user.Gender}</p>
                   <p>Address: {user.Address}</p>
                   <p>Contact Number: {user.ContactNumber}</p>
                   <p>Allergies: {user.Allergies}</p>
              </li>
          ))}
          </ul>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
