import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://movieapplicationapi.herokuapp.com/auths/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    const json = await response.json();
    if (json.authSuccess) {
      localStorage.setItem("token", json.authToken);
      navigate("/Dashboard");
    } else {
      
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-fluid ">
        <div className="text-center" >
            <h1 className="font-heading text-lg font-normal text-white font-bold  font-size: 200% " >MOVIE LIBRARY</h1>
            <form action="/header" style={{backgroundColor: "white"}} class="form-group"></form>
    <div className="container bgimage">
      <div className="row align-items-center my-2">
        </div>
        </div>
        <div className="col cred-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3" style={{textAlignVertical: "left",textAlign: "left",}}>
              <label htmlFor="email" className="form-label" >
                E-mail
              </label>
              <input
                type="email"
                value={credentials.email}
                onChange={onChange}
                name="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="mb-3" style={{textAlignVertical: "left",textAlign: "left",}}>
              <label htmlFor="password1" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={credentials.password}
                onChange={onChange}
                name="password"
                className="form-control"
                id="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
        <div className="row align-items-center my-5">
          <h3 className="newUser">
            New User? <Link to="/Register">Create Account</Link>
          </h3>
        </div>
      </div>
      
    </div>
  );
}

export default Login;
