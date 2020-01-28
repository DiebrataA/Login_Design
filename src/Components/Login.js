import React, { Component } from 'react'
import { Box, Container, Typography, CardContent, CardActions, TextField, SvgIcon } from '@material-ui/core'
import '../App.css';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import Forminput from './Forminput';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';


export default class Login extends Component {
    render() {
        return (
             
 
                    <Card className="content" style={{borderRadius:"10px"}} >
                      
                    <CardContent className="App" style={{marginLeft:"20%"}}>
                    <AccountCircleIcon  style={{fontSize: 80, marginBottom:10, color: '#4A90E2'}} /><br />
                   <Forminput
                    id="username"
                    label="Username"
                    placeholder="Username" /> <br />
                     <Forminput
                    id="password"
                    label="Password"
                    placeholder="Password"
                    type="password"
                     /> <br />
                     <Button 
                        style={{borderRadius:"50px", fontSize:"20px"}} 
                        size="large" 
                        variant="contained" 
                        color="secondary"
                        endIcon={<SendIcon />}>
                            Login
                    </Button>
                        </CardContent >   
                        
                   </Card>
                 
        )
    }
}
