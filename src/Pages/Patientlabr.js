import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import { db, database, imagedb } from '../firebase.Config'; // Correct import
// import { v4 as uuidv4 } from 'uuid';
// import { ref, uploadBytes } from 'firebase/storage';
// import { getDocs, addDoc, collection, where, query } from 'firebase/firestore';
// import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase.Config'; // Import Firebase Firestore instance



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
            <Header/>
            
            {/* ======= Why Us Section ======= */}

            <div className='containera'>

            <div className='patient'>

            <div className='row'>  

                <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
                    <i className="bx bx-receipt"></i>
                    <h4>Lab Report Management</h4>
                    <p>Securely store and manage your lab reports online for convenient access whenever you need them</p>
                </div>
           
                <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
                    <i className="bx bx-receipt"></i>
                    <h4>Lab Report Management</h4>
                    <p>Securely store and manage your lab reports online for convenient access whenever you need them</p>
                </div>
              
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

                <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
                    <i className="bx bx-images"></i>
                    <h4>Join the Revolution</h4>
                    <p>Join us in revolutionizing healthcare in Sri Lanka by embracing digital solutions for better patient outcomes</p>
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
