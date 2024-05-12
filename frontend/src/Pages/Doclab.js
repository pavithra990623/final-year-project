import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { db } from '../firebase.Config'; // Import Firebase Firestore instance
import Sidebarlab from "../components/Sidebarlab";
import './Patientlabr.css';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from 'react-router-dom';

function Doclab() {
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

    const navigate = useNavigate(); // Define navigate

    const handleNavigateToLab = () => {
        navigate('/lab');
    };

    return (
        <div>
            <Sidebarlab/>

            <p>The details of the Patients</p>
            
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
                            <h4>Patient Name : J.M.Jayasinghe </h4><br></br>
                            <p>Patient ID: AKH2431324 </p>
                            <Link to="/profile">
                                <button type="button">View</button>
                            </Link>
                        </div>

                        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
                           <i className="bx bx-cube-alt"></i>
                           <h4>Patient Name:  </h4><br />
                           <p>Patient ID:  </p>
                           <button type="button" onClick={handleNavigateToLab}>View</button>
                        </div>

                        <div className="icon-box1" style={{ backgroundColor: '#D3D3D3' }}>
                           <i className="bx bx-cube-alt"></i>
                           <h4>Patient Name:  </h4><br />
                           <p>Patient ID:  </p>
                           <button type="button" onClick={handleNavigateToLab}>View</button>
                        </div>
                        
                      
                        {/* Add more icon-box1 divs as needed */}
                    </div>
                </div>
            </div>
          
            <Footer/>
        </div>  
    );
}

export default Doclab
