import { Routes, Route, useLocation } from 'react-router-dom';
import { PublicLayout, SystemLayout } from '../shared/layout';
import Pages from './pages.path';

export default function AppRoutes() {
    const location = useLocation();
    console.log(location);
    return (
        <Routes location={location}>
            <Route element={<PublicLayout />}>
                <Route path={Pages.login.path} element={Pages.login.element} />
                <Route path={Pages.notfound.path} element={Pages.notfound.element} />
            </Route>
            <Route element={<SystemLayout />}>
                <Route path={Pages.notfound.path} element={Pages.notfound.element} />
                <Route path={Pages.calendar.path} element={Pages.calendar.element} />
                <Route path={Pages.clients.path} element={Pages.clients.element} />
                <Route path={Pages.budgets.path} element={Pages.budgets.element} />
                <Route path={Pages.sales.path} element={Pages.sales.element} />
                <Route path={Pages.employees.path} element={Pages.home.element} />
                <Route path={Pages.products.path} element={Pages.products.element} />
                <Route path={Pages.home.path} element={Pages.home.element} />
            </Route>
        </Routes>
    );
}
