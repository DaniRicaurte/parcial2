import React, { useEffect, useState } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers]=useState("");

  const handleLogin = (event) => {
    if(username==="Admin")
        props.changeUser(true); 
    
  }

  useEffect(() => {
    const requestOptions = {
        method: 'GET',
        };
        fetch('http://localhost:3000/login', requestOptions)
        .then(response => response.json())
        .then(data => {
            setUsers(data);
        });
  }, []);
 
  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="username">Users name or Email</label>
        <input type="text" id="username" className="form-control" value={username} onChange={(event) => setUsername(event.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="form-control" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      
      <Button variant="primary" onClick={handleLogin}>
            <Link to={"/books" }>Login</Link>
        </Button>
    </form>
  );
}

export default Login;