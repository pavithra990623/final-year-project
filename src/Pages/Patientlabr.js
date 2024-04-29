import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import { db } from '../firebase.Config'; // Import Firebase Firestore instance
import Sidebarlab from "../components/Sidebarlab";
import './Patientlabr.css';

function Patientlabr() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersRef = db.collection('Auth');
                const snapshot = await usersRef.get();
                const userData = snapshot.docs.map(doc => doc.data());
                console.log('Fetched users:', userData); // Log fetched users
                setUsers(userData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <Sidebarlab/>

        <p>THe details of the Patients</p>
            
            {/* ======= Why Us Section ======= */}

            <div className='containera'>

            <div className='patient'>

            <div className='row'>  

                {/* Iterate over users and render profile data */}
                {users.map((user, index) => (
                    <div className="icon-box1" key={index} style={{ backgroundColor: '#D3D3D3' }}>
                        <i className="bx bx-receipt"></i>
                        <h4>{user.Username}</h4>
                        <p>Email: {user.Email}</p>
                        <p>Age: {user.Age}</p>
                        {/* Add more profile data fields as needed */}
                    </div>
                ))}
              
                <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
                    <i className="bx bx-cube-alt"></i>
                    <h4>Doctor-Patient Collaboration</h4>
                    <p>Collaborate seamlessly with your healthcare provider by sharing medical information and updates securely online</p>
                </div>
              
                <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
                    <i className="bx bx-images"></i>
                    <h4>Join the Revolution</h4>
                    <p>Join us in revolutionizing healthcare in Sri Lanka by embracing digital solutions for better patient outcomes</p>
                </div>
              
                </div>
            {/* End .content */}
            </div>
            </div>
          
            <Footer/>

        </div>  
    );
}

export default Patientlabr;
