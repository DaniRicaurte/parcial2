import React from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const {  useState } = require("react");


function Login(props) {
  
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) =>  
  { 
    
    if (mail !== "" || password !== ""|| password.length < 6) {
    navigate('/');
    
    }

    try {

      
      const data = { mail, password };
      console.log(data);
      const response = await fetch("https://parcial2-be-ec3d.vercel.app/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })


      if (!response.ok) {
        throw new Error("Error when fetching");
      }

      const respuesta = await response.json();
      sessionStorage.setItem('token', respuesta.rol);
      navigate('/books');

    } catch (error) {
      console.log(error)
      console.error("", error);
    }
  }



  


  return (
    <div className="container">
      <form onSubmit= {handleLogin}  className="login-form">
        <div className="form-group">
          <label htmlFor="mail"><FormattedMessage id="Users name or Email" /></label>
          <input
            type="email"
            className="form-control"
            value={mail}
            onChange={(event) => setMail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password"><FormattedMessage id="Password"/> </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <Button variant="primary" onClick={handleLogin}>
          <Link to={"/books"}>  </Link>

          Login
        </Button>
      </form>
      </div>
  );
}

export default Login;
