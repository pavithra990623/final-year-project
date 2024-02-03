// import React, { useState } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import './Register.css';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../path-to-firebaseConfig';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [age, setAge] = useState('');
//   const [dob, setDob] = useState('');
//   const [gender, setGender] = useState('');
//   const [address, setAddress] = useState('');
//   const [contactNumber, setContactNumber] = useState('');
//   const [allergies, setAllergies] = useState('');

//   // Initialize Firebase
//   if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//   }

//   const handleRegister = async () => {
//     try {
//       const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
//       // Additional registration logic (e.g., storing user details in Firebase Realtime Database)
//       console.log('Registration successful:', userCredential.user);
//     } catch (error) {
//       console.error('Registration failed:', error.message);
//     }
//   };

//   const handleLogout = () => {
//     firebase.auth().signOut();
//     // Additional logout logic if needed
//   };

//   return (
//     <div>
//       <Header />
//       <div className='rcontainer'>
//         <div className='form-rcontainer'>
//           <h2>Registration Form</h2>
//           <form>
//             <label>
//               Email
//               <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             </label>
//             <br />

//             <label>
//               Password
//               <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             </label>
//             <br />

//             <label>
//           UserName     
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </label>
//         <br />

//         <label>
//           Age   
//           <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
//         </label>
//         <br />

//         <label>
//           Date of Birth     
//           <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
//         </label>
//         <br />

//         <label>
//           Gender     
//           <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
//         </label>
//         <br />

//         <label>
//           Address     
//           <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//         </label>
//         <br />

//         <label>
//           Contact Number     
//           <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
//         </label>
//         <br />

//         <label>
//           Allergies that you have     
//           <input type="text" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
//         </label>
//         <br />

//             <button type="button" onClick={handleRegister}>
//               Register
//             </button>
//             <br />
//             <button type="button" onClick={handleLogout}>
//               Logout
//             </button>
//           </form>
//         </div>
//       </div>
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default Register;
