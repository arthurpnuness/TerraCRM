import CssBaseline from '@mui/material/CssBaseline';
import Router from './routes';
import LoadingScreen from './shared/components/loading';
function App() {
    return (
        <>
            <CssBaseline />
            <LoadingScreen />
            <Router />
        </>
    );
}

export default App;
