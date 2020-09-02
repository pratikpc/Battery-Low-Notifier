import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import IconAndroid from '@material-ui/icons/AndroidRounded';

export default function Dashboard() {
   return (
      <>
         <Typography
            variant="h5"
            style={{
               position: 'absolute',
               top: '50%',
               textAlign: 'center',
               transform: 'translateY(-50%)'
            }}
         >
            Please Install the Android App.
            <br />
            When the Android App is Installed, and this window is open, you will
            receive notifications
            <br />
            <br />
            <Button variant="outlined" component={Link} to="/release">
               <IconAndroid />
               Download Android APK
            </Button>
         </Typography>
      </>
   );
}
