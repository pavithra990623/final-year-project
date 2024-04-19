import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db, auth } from '../firebase.Config'; // Import Firebase Firestore instance and Auth
import { doc, getDoc } from 'firebase/firestore';

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userUid, setUserUid] = useState(null); // State to store the user's UID

  useEffect(() => {
    // Listener for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, get the UID
        setUserUid(user.uid);
      } else {
        // No user is signed in
        setUserUid(null);
      }
    });

    // Fetch user data when the component mounts or when the user UID changes
    if (userUid) {
      fetchUserData();
    }

    // Cleanup function
    return () => unsubscribe();
  }, [userUid]); // Trigger useEffect when userUid changes

  const fetchUserData = async () => {
    try {
      const userDocRef = doc(db, 'Auth', userUid); // Assuming 'Auth' is your collection name
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        console.log('Fetched user data:', userData);
        setUserData(userData);
      } else {
        console.log('User document does not exist');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className='profile-container'>
        <h2>About Me</h2>
        {loading ? (
          <p>Loading user data...</p>
        ) : userData ? (
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
        ) : (
          <p>No user data available.</p>
        )}
      </div>
      {/* Other profile page content */}
      <Footer />
    </div>
  );
}

export default Profile;
