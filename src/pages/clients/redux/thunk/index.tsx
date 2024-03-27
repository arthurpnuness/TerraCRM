import { createAsyncThunk } from '@reduxjs/toolkit';
import firebaseConnect from '../../../../shared/services/firebase/firebase.connection';
import { collection, doc, getDocs, setDoc } from 'firebase/firestore';
import { Client } from '../../../../shared/contratcs/client.interface';
import { setLoading } from '../../../../store/system.slice';

const createdClient = createAsyncThunk('client/post', async (data: Client, { dispatch }) => {
    try {
        dispatch(setLoading(true));
        if (!data.cod) {
            const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let codigo = '';

            for (let i = 0; i < 4; i++) {
                codigo += Math.floor(Math.random() * 10);
            }

            for (let i = 0; i < 2; i++) {
                codigo += letras.charAt(Math.floor(Math.random() * letras.length));
            }
            data.cod = data.tipoPessoa + codigo;
        }
        const load = firebaseConnect();
        const db = collection(load.db, 'clients');
        const clientRef = await setDoc(doc(db.firestore, db.path, data.cod as string), data);
        (document.getElementById('full-width-tab-Clientes-0') as HTMLButtonElement).click();
        dispatch(setLoading(false));
        console.log(clientRef);
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
});

const getAllclients = createAsyncThunk('clients/get', async (_, { dispatch }) => {
    try {
        dispatch(setLoading(true));
        const load = firebaseConnect();
        console.log(load);
        const db = collection(load.db, 'clients');
        console.log('db', db);
        const getusers = await getDocs(db);
        console.log(getusers);
        const listclients = getusers.docs.map((client) => client.data());
        console.log(listclients);
        // const verifiedUser = listusers.find(
        //     (u) => u.usuario === data.usuario && u.senha === data.senha
        // );

        dispatch(setLoading(false));
        return listclients as Client[];
    } catch (error) {
        console.error(error);
        return [];
    }
});

export { createdClient, getAllclients };
