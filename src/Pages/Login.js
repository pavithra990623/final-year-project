import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; 

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase.Config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//
// function Login() {
//   const history = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const { user, setUser } = useAuth();

//   useEffect(() => {
//     if(user) history("/");
//   }, [user, history]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password); 
//       history("/");
//     } catch (error) {
//       setError("Wrong email or password!");
//       console.error(error);
//     }
//   };
//


  //
  const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleLogin = (e)=>{
      e.preventDefault()

      signInWithEmailAndPassword(auth, email, password)
      
  //     .then((userCredential) => {
  //       console.log(userCredential);
  //       navigate("/")
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    navigate("/Profile")
  })
  .catch((error) => {
    setError(true);
  });
    }
  //

  return (
    <div>
      <Header />
      <div className="logcontainer">
        <div className="form-logcontainer">
          <h2>Login Here</h2>
          <form onSubmit={handleLogin}>
            <br />
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="email"
                
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password
              <input
                type="password"
                name="password"
                placeholder="password"
                
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit" className="logbutton">
              Login
            </button>
            {error && <span1>{error}</span1>}
          </form>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
//}

export default Login;   