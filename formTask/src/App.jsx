import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import './App.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('Login Success');
    setUsername('');
    setPassword('');
  };

  return (
    <Container className= "contain" maxWidth="sm">
      <Typography variant="h4" style={{fontFamily: "fantasy", paddingTop: "50px"}}>Login Form</Typography>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '30px'}}>
          <TextField className='textf'
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ margin: '20px' }}>
          <TextField className='textf'
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ margin: '20px' }}>
          <Button type="submit" variant="contained" color="primary" className='button'>
            Login
          </Button>
        </div>
      </form>
      <Typography>{message}</Typography>
    </Container>
  );
};

export default App;
