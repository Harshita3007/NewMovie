import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function Register() {

    const [credentials, setCredentials] = useState({name : "", email : "", password : ""}); 
    let navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch(
          "https://movieapplicationapi.herokuapp.com/auths/createUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: credentials.name,
              email: credentials.email,
              password: credentials.password,
            }),
          }
        );
        const json =  await response.json()
        if(!json.regSuccess){
           
        }else{
            navigate('/');
        }
    }

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name] : e.target.value});
    }

    return (
      <div className="container">
        <div className="row align-items-center my-5">
        <div className="container-fluid ">
        <div className="text-center" >
            <h1 className="font-heading text-lg font-normal text-white font-bold  font-size: 110% " >MOVIE LIBRARY</h1>
            <form action="/header" style={{backgroundColor: "white"}} class="form-group">
          </form>
          </div>
        </div>
          <div className="col cred-box">
            <h1 style={{textAlignVertical: "center",textAlign: "center",}}>Register Here</h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={credentials.name}
                  onChange={onChange}
                  name="name"
                  className="form-control"
                  id="inputName"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  value={credentials.email}
                  onChange={onChange}
                  name="email"
                  className="form-control"
                  id="inputEmail"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  value={credentials.password}
                  onChange={onChange}
                  name="password"
                  className="form-control"
                  id="inputPassword"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <button
                style={{ marginLeft: "5%" }}
                onClick={() => navigate("/")}
                className="btn btn-primary"
              >
                Back To Sign In
              </button>
            </form>
          </div>
        </div>
     
      </div>
    );
}

export default Register
