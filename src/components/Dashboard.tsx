import React from 'react';
import { Typography } from '@material-ui/core';

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
         </Typography>
      </>
   );
}
