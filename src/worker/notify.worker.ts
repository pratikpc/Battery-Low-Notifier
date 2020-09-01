import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { wrap } from 'idb';

import AsyncLock from 'async-lock';

const MyLock = new AsyncLock({
   timeout: 500
});

const FirebaseConfig = {
   apiKey: 'AIzaSyC7UY52Ta47PlEEd4nGit8kpEsDJmllAD0',
   authDomain: 'battery-power-9a1d9.firebaseapp.com',
   databaseURL: 'https://battery-power-9a1d9.firebaseio.com',
   projectId: 'battery-power-9a1d9',
   storageBucket: 'battery-power-9a1d9.appspot.com',
   messagingSenderId: '43180403362',
   appId: '1:43180403362:web:a319c9a9a2766864fd05fb',
   measurementId: 'G-NZM6ER5V5E'
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let db: IDBDatabase;
const request = indexedDB.open('battery', 1);

const items = new Set<string>();

request.onerror = () => {
   // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
   // @ts-ignore
   postMessage({
      type: 'Error'
   });
};

request.onsuccess = () => {
   db = request.result;
};

request.onupgradeneeded = event => {
   if (event == null || event.target == null) return;
   const dbUp = (event.target as any).result;
   dbUp.createObjectStore('battery');
};

firebase.initializeApp(FirebaseConfig);

const isFirstSoIgnore = new Map<string, boolean>();
async function StartFirebase(uidOpt: string | null = null) {
   return await MyLock.acquire('StartFirebase', async () => {
      if (firebase.apps.length <= 0) return;
      const firestore = firebase.firestore();
      firestore.settings({});
      let uid = uidOpt;
      if (db == null && uidOpt == null) return;
      if (uid == null) {
         const uidDb = await wrap(db).get('battery', 'battery');
         if (uidDb == null) return;
         uid = String(uidDb);
      } else {
         if ((await wrap(db).get('battery', 'battery')) == null)
            await wrap(db).add('battery', uid, 'battery');
         await wrap(db).put('battery', uid, 'battery');
         items.add(uid);
      }

      if (uid == null) return;
      if (items.has(uid)) return;
      firestore
         .collection('battery')
         .doc(uid)
         .onSnapshot(async data => {
            if (uid == null) return;
            if (!isFirstSoIgnore.has(uid)) {
               isFirstSoIgnore.set(uid, true);
               return;
            }
            if (data == null) return;

            let elem = data;
            if (Array.isArray(data)) {
               [elem] = data;
            }
            if (elem.data() == null) return;

            // eslint-disable-next-line no-new
            new Notification('Your Battery is Low', {
               icon: `${process.env.PUBLIC_URL}/logo192.png`
            });
         });
   });
}

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
onmessage = async (e: MessageEvent) => {
   if (e.data.type === 'start') {
      isFirstSoIgnore.clear();
      await StartFirebase(e.data.uid);
   }
   if (e.data.type === 'new-user') {
      const uid = String(e.data.uid);
      if ((await wrap(db).get('battery', 'battery')) == null)
         await wrap(db).add('battery', uid, 'battery');
      await wrap(db).put('battery', uid, 'battery');
   }
   if (e.data.type === 'clear-user') {
      await wrap(db).delete('battery', 'battery');
   }
   if (e.data.type === 'notify') {
      // eslint-disable-next-line no-new
      new Notification('Your Battery is Low', {
         icon: `${process.env.PUBLIC_URL}/logo192.png`
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      postMessage('Result');
   }
};
setTimeout(() => StartFirebase(), 500);
