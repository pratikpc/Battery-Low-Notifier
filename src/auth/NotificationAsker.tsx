import React from 'react';
import { Button, Link } from '@material-ui/core';
import { Link as DOMLink } from 'react-router-dom';

import IconAndroid from '@material-ui/icons/Android';

export default function NotificationAsker() {
   return (
      <div
         className="center"
         style={{ textAlign: 'center', paddingTop: '60px' }}
      >
         <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Logo" />
         <br />
         <h2>
            <b>Download. Install. Get Low Battery Notifications</b>
         </h2>
         <div
            className="center"
            style={{
               textAlign: 'center',
               padding: '30px',
               color: '#808080',
               fontSize: '20px'
            }}
         >
            <div>
               Sends Notification whenever your Battery is Low
               <br /> Remember to Install Our Android App
               <br />
               <br />
            </div>
            <div>
               <div>
                  <Link href="https://support.google.com/chrome/answer/3220216?co=GENIE.Platform%3DDesktop&hl=en">
                     Enable Notifications on Chrome
                  </Link>
               </div>
               <div>
                  <Link href="https://support.mozilla.org/en-US/kb/push-notifications-firefox">
                     Enable Notifications on Firefox
                  </Link>
               </div>
            </div>
            <div>
               <br />
               <Button variant="outlined" component={DOMLink} to="/release">
                  <IconAndroid />
                  Download Android APK
               </Button>
            </div>
         </div>
         <Button
            variant="outlined"
            onClick={async () => {
               await Notification.requestPermission();
               window.location.href = `${process.env.PUBLIC_URL}/`;
            }}
         >
            <p>Click to Request Notification Access</p>
         </Button>
      </div>
   );
}
