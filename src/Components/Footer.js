import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
  return (
    <Typography variant="body2" color="WHITE">
      {'2015 moonlay technologies - ALL RIGHT RESERVED '}
      
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#015AC2'
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div >
      <footer className={classes.footer}>
        <Container maxWidth="sm">
            <Container className="App" style={{color:"white"}}>
               <IconButton href="#" style={{color:"white"}}><FacebookIcon style={{fontSize:36}}/></IconButton>
               <IconButton href="#" style={{color:"white"}}><TwitterIcon style={{fontSize:36}}/></IconButton> 
               <IconButton href="#" style={{color:"white"}}><InstagramIcon style={{fontSize:36}}/></IconButton> 
               <IconButton href="#" style={{color:"white"}}><LinkedInIcon style={{fontSize:36}}/></IconButton> 
                 <Typography  style={{marginBottom:5}} variant="body1">moonlay<b>technologies</b></Typography>
          <Copyright />
            </Container>
        </Container>
      </footer>
    </div>
  );
}