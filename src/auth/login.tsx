import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

// Configure FirebaseUI.
const uiConfig = {
   signInFlow: 'redirect',
   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
   signInSuccessUrl: `${process.env.PUBLIC_URL}/`,
   // We will display Google and Facebook as auth providers.
   signInOptions: [
      {
         provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
         customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: 'select_account'
         }
      }
   ]
};

export default function Login() {
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
            <p>
               Sends Notification whenever your Battery is Low
               <br /> Remember to Install Our Android App
            </p>
         </div>
         <div style={{ display: 'inline-block', height: '50%', width: '100%' }}>
            <StyledFirebaseAuth
               uiConfig={uiConfig}
               firebaseAuth={firebase.auth()}
            />
         </div>
      </div>
   );
}
