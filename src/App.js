import React from 'react';
import './App.css';
import { Box, Container, Typography } from '@material-ui/core';
import Login from './Components/Login';
import Logo from './Components/Logo'


function App() {
  return (
    <Box className="background">
      <Container className="App-header" style={{width:"100%"}}>
      <Logo />
        <Login />
      <Typography className="vision" style={{fontSize:"24px", marginTop:"10px"}}>
        " Answering IT matters with qualified professional and reliable solution. "
      </Typography>
        </Container>
    </Box>
  );
}

export default App;
