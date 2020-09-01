import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import Login from './login';
import NotificationAsker from './NotificationAsker';

export function CurrentUser() {
   return firebase.auth().currentUser;
}

export async function GetIDToken() {
   return await CurrentUser()?.getIdToken();
}

export function GetUserUniqueKey() {
   return CurrentUser()?.uid;
}

export function LogOut() {
   return firebase.auth().signOut();
}

export const AppRoutes: React.FC = props => {
   return (
      <>
         <ShowIfNoNotify>
            <NotificationAsker />
         </ShowIfNoNotify>
         <ShowIfNotify>
            <ShowIfNoAuth>
               <Login />
            </ShowIfNoAuth>
            <ShowIfAuth>{props.children}</ShowIfAuth>
         </ShowIfNotify>
      </>
   );
};
export const ShowIfNoNotify: React.FC = props => {
   if (Notification.permission !== 'granted') return <>{props.children}</>;
   return <></>;
};
export const ShowIfNotify: React.FC = props => {
   if (Notification.permission === 'granted') return <>{props.children}</>;
   return <></>;
};

export const ShowIfNoAuth: React.FC = props => {
   if (CurrentUser() == null) return <>{props.children}</>;
   return <></>;
};
export const ShowIfAuth: React.FC = props => {
   if (CurrentUser() != null) return <>{props.children}</>;
   return <></>;
};

export default AppRoutes;
