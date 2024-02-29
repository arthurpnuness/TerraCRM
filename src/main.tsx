import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { LicenseInfo } from '@mui/x-license-pro';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';

LicenseInfo.setLicenseKey(
    '1919867ea7d28016281f8bfff8ea8d58Tz02NDc0LEU9MjAwMzc4MTg0ODAwMCxTPXByZW1pdW0sTE09c3Vic2NyaXB0aW9uLEtWPTI='
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
