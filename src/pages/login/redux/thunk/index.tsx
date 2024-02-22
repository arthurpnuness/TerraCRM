import { createAsyncThunk } from '@reduxjs/toolkit';
import firebaseConnect from '../../../../shared/services/firebase/firebase.connection';
import { collection, getDocs } from 'firebase/firestore';

const loginFirebase = createAsyncThunk(
    'login',
    async (data: { usuario: string; senha: string }) => {
        try {
            const load = firebaseConnect();
            console.log(load);
            const db = collection(load.db, 'users');
            console.log('db', db);
            const getusers = await getDocs(db);
            console.log(getusers);
            const listusers = getusers.docs.map((user) => user.data());
            console.log(listusers);
            const verifiedUser = listusers.find(
                (u) => u.usuario === data.usuario && u.senha === data.senha
            );
            console.log(verifiedUser);
            if (!verifiedUser) {
                throw new Error('Acesso não permitido!');
            }
            const user = {
                usuario: verifiedUser.usuario as string,
                email: verifiedUser.email as string,
                accessLevel: verifiedUser.accessLevel as number,
            };
            return user;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
);

export { loginFirebase };
