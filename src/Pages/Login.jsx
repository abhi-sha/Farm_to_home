  import React from "react";
  import { useState } from "react";

  import { Link, useNavigate } from "react-router-dom";
  import Navbar from "../components/Navbar";
  const Login = () => {
    const [credentials, setcredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch("http://localhost:3001/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (!json.success) {
        alert("ENTER VALID CREDENTIALS");
      }
      if (json.success) {
        localStorage.setItem('userEmail',credentials.email);
        localStorage.setItem('authToken',json.authToken);
        localStorage.setItem('login',JSON.stringify(credentials.email))
        navigate("/");
      }
    };

    const onChange = (e) => {
      setcredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
      <>
        <Navbar/>
        
        <div className="container   w-50  border border-success "style={{borderRadius:"10px",'padding':'100px'}}>
          <form onSubmit={handleSubmit} >
            <div className="mb-3">
              <label htmlFor="Mail" className="form-label">
                Mail{" "}
              </label>
              <input
                type="mail"
                className="form-control"
                name="email"
                onChange={onChange}
                value={credentials.email}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="m-3 btn btn-success">
              Submit
            </button>
            <Link to="/createuser" className="m-3 btn btn-danger">
              Create user{" "}
            </Link>
          </form>
        </div>
      </>
    );
  };

  export default Login;
