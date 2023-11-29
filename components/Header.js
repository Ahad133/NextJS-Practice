import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: 'white', borderRadius:'20px'}}>
      <Toolbar>
        {/* Purple background behind logo */}
        <div style={{ backgroundColor: '#7c57ff', padding: '10px', borderRadius: '5px', marginLeft:'20px' }}>
          <Typography variant="h6" style={{ color: 'white' }}>
            Your Logo
          </Typography>
        </div>
        <div style={{ flexGrow: 1 }}></div>
        
        {/* Feedback button */}
        <Button variant="contained" color="primary" style={{ backgroundColor: '#7c57ff', borderRadius: '20px', marginRight:'20px' }}>
          Feedback
        </Button>

        {/* Notification button with borders */}
        <IconButton
          color="inherit"
          style={{
            backgroundColor: '#7c57ff',
            marginRight: '20px'  
          }}
        >
          <NotificationsIcon style={{ color: 'white' }} />
        </IconButton>
        
        <Avatar alt="Profile" src="/placeholder-profile.jpg" style={{marginRight:'20px'}} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
