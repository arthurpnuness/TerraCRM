import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router';
export default function Router() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

export { default as Pages } from './pages.path';
