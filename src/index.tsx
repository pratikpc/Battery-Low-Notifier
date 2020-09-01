import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';

import FirebaseConfig from './firebase.config';
import { CurrentUser } from './auth';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import NotifyWorker from './worker/notify.worker';

const worker = new NotifyWorker();

 async function FirebaseSetup() {
   firebase.initializeApp(FirebaseConfig);
   // worker.onmessage = (ev: any) => console.log(ev);
   if (window.Notification == null) {
      throw new Error('Notification Permit Not Granted');
   }
   // Wait till Firebase Load Complete before Firing
   function getCurrentUser(auth: firebase.auth.Auth) {
      return new Promise<firebase.User | null>((resolve, reject) => {
         const unsubscribe = auth.onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
         }, reject);
      });
   }
   // If you want your app to work offline and load faster, you can change
   // unregister() to register() below. Note this comes with some pitfalls.
   // Learn more about service workers: https://bit.ly/CRA-PWA
   serviceWorker.register();
   await getCurrentUser(firebase.auth());
   const user = CurrentUser();
   if (user != null) {
      const { uid } = user;
      setTimeout(() => {
         worker.postMessage({
            type: 'start',
            uid: uid
         });
      }, 500);
   }
}

FirebaseSetup()
   .then(() => {
      ReactDOM.render(<App />, document.getElementById('root'));
      return null;
   })
   .catch(err => console.error(err));
