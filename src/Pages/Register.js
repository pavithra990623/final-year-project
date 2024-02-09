import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { db, imagedb } from '../firebase.Config'; // Correct import
import { v4 as uuidv4 } from 'uuid';
import { ref, uploadBytes } from 'firebase/storage';
import { getDocs, addDoc, collection, where, query } from 'firebase/firestore';
import { doc, setDoc } from 'firebase/firestore';

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
  const [img, setImg] = useState(null);
  const [metch, setMetch] = useState([]);
  const dbref = collection(db, "Auth");

  const handleRegister = async () => {
    const matchEmail = query(dbref, where('Email', '==', email));

    try {
      const snapshot = await getDocs(matchEmail);
      const emailMatchingArray = snapshot.docs;
      if (emailMatchingArray.length > 0) {
        alert("This Email Address Already Existed");
      } else {
        await addDoc(dbref, { Email: email, Username: username, Password: password, Age: age, Dob: dob, Gender: gender, Address: address, ContactNumber: contactNumber, Allergies: allergies });
        alert('Signup Successful');
      }
    } catch (error) {
      alert(error);
    }
  };
  


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

        <label>
              Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />

        <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />

        <label>
          UserName     
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />

        <label>
          Age   
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
        <br />

        <label>
          Date of Birth     
          <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />

        <label>
          Gender     
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </label>
        <br />

        <label>
          Address     
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />

        <label>
          Contact Number     
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </label>
        <br />

        <label>
          Allergies that you have     
          <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
          </form>

          
          <h3>The image of vaccination card</h3>
          <input type="file" onChange={(e) => setImg(e.target.files[0])} />
          <br></br>
          <button onClick={handleClick}>Upload</button>
          <br></br>
        </div>
      </div>

      <br></br>
      <Footer />
    </div>
  );
};

export default Register;
