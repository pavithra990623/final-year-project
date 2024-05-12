import React, { useState } from 'react';
import Header from '../components/Header';
import { db, imagedb, auth } from '../firebase.Config'; // Correct import including auth
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes } from 'firebase/storage';
import { getDocs, addDoc, collection, where, query } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [allergies, setAllergies] = useState('');
  const [nic, setNic] = useState('');
  const [img, setImg] = useState(null);
  const [metch, setMetch] = useState([]);
  const dbref = collection(db, "Auth");
  const navigate = useNavigate();

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       alert('Registered Successful');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       navigate('/');
  //     });
  // };

  const handleRegister = async () => {
    const matchEmail = query(dbref, where('Email', '==', email));

    try {
      const snapshot = await getDocs(matchEmail);
      const emailMatchingArray = snapshot.docs;
      if (emailMatchingArray.length > 0) {
        alert("This Email Address Already Existed");
      } else {
        createUserWithEmailAndPassword(auth, email, password)
        await addDoc(dbref, { Email: email, Username: username, Password: password, Age: age, Dob: dob, Gender: gender, Address: address, ContactNumber: contactNumber, Allergies: allergies });
        alert('Registered Successful');
        navigate('/Login'); // Navigate to Home page after successful registration
      }
    } catch (error) {
      alert(error);
    }
  };

  // Example registration function
  // const handleRegistration = async (email, password) => {
  //   try {
  //     await auth.createUserWithEmailAndPassword(email, password);
  //     // Registration successful, navigate to Home page
  //     navigate('/');
  //   } catch (error) {
  //     // Handle registration error
  //     console.error(error);
  //   }
  // };
  
  // Function to handle image upload
  const handleClick = () => {
    const storageRef = ref(imagedb, `files/${uuidv4()}`); // Generate a unique file path
    uploadBytes(storageRef, img).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
    }).catch((error) => {
      console.error('Error uploading file:', error);
    });
  }
 // end of image upload section

  return (
    <div>
      <Header />
      <div className='rcontainer'>
        <div className='form-rcontainer'>
          <h2>Registration Form</h2>
          <form>

          <div className="form-row">
              <div className="form-col">
                <label>
                  <span>Email:</span>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                  <span>Password:</span>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                  <span>Username:</span>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                  <span>Age:</span>
                  <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <label>
                  <span>Allergies:</span>
                  <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
                </label>
              </div>
              <div className="form-col">
                <label>
                  <span>Date of Birth:</span>
                  <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </label>
                <label>
                  <span>Adderss:</span>
                  <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>
                  <span>Address:</span>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                </label>
                <label>
                  <span>Contact Number:</span>
                  <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                </label>
                <label>
                  <span>NIC:</span>
                  <input type="text" value={nic} onChange={(e) => setNic(e.target.value)} />
                </label>               
              </div>
            </div>

            
            </form> 
            <div className="button-container">
              <button type="button" onClick={handleRegister}>Register</button>
                <br></br><br></br><br></br>  

                  {/* <h3>The image of Medical Records; If have any</h3>
                      <input type="file" onChange={(e) => setImg(e.target.files[0])} />
                  <br></br>
               <button onClick={handleClick}>Upload</button> */}
                   <br></br>
            </div>
        </div>
      </div>

      <br></br>
      {/* <Footer /> */}
    </div>
  );
};

export default Register;
