import React, { useState } from "react";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login without backend
    if (email === "test@example.com" && password === "password") {
      // Redirect to profile page
      navigate("/profile");
    } else {
      setError(true);
    }
  };

//   const handleNavigateToPatientlabr = () => {
//     navigate('/Patientlabr');
//   };

  return (
    <div>
      {/* <Header /> */}
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
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <Link to="/doclab">
                <button type="button">Login</button>
            </Link>
          </form>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Login;
