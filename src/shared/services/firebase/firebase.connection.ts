import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
export default function firebaseConnect() {
    const firebaseConfig = {
        apiKey: 'AIzaSyADVbHLFCeBiisgQap6GE53Q_8LmKMq91c',
        authDomain: 'terra-crm93.firebaseapp.com',
        databaseURL: 'https://terra-crm93-default-rtdb.firebaseio.com',
        projectId: 'terra-crm93',
        storageBucket: 'terra-crm93.appspot.com',
        messagingSenderId: '550321428380',
        appId: '1:550321428380:web:12ed780ce3c3ca145c1a59',
    };

    const app = initializeApp(firebaseConfig);
    console.log(app.name);
    const auth = getAuth(app);
    const db = getFirestore(app);

    return { db, auth };
}
