import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db, auth } from '../firebase.Config';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError('');
      try {
        const user = auth.currentUser;
        if (!user) throw new Error('No user logged in');
        const userDoc = await getDoc(doc(db, 'users', user.uid));  // Assuming 'users' is the correct collection
        if (userDoc.exists()) {
          setUserDetails(userDoc.data());
        } else {
          setError('No user data found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError(error.message);
      }
      setLoading(false);
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    if (!userDetails) {
      alert('No user details to update.');
      return;
    }

    const updatedDetails = Object.fromEntries(
      Object.entries(userDetails).filter(([_, value]) => value)
    );

    if (Object.keys(updatedDetails).length === 0) {
      alert('No changes to update');
      return;
    }

    try {
      const user = auth.currentUser;
      await updateDoc(doc(db, 'users', user.uid), updatedDetails);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile: ' + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      alert('Failed to logout: ' + error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className='profile-container'>
        <h2>About Me</h2>
        {error ? (
          <p>Error: {error}</p>
        ) : userDetails ? (
          <div>
            <p>Username: {userDetails.username}</p>
            <p>Email: {userDetails.email}</p>
            <p>Age: {userDetails.age}</p>
            <p>Gender: {userDetails.gender}</p>
            <p>Date of Birth: {userDetails.dob}</p>
            <p>Address: {userDetails.address}</p>
            <p>Contact Number: {userDetails.contactNumber}</p>
            <p>Allergies: {userDetails.allergies}</p>
            <p>NIC: {userDetails.nic}</p>
          </div>
        ) : (
          <p>No user data available.</p>
        )}

        
        <button type="button" onClick={handleUpdateProfile}>Update Profile</button>
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;