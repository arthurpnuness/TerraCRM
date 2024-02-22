import NotFound from '../pages/404/page';
import Budgets from '../pages/budgets/page';
import Calendar from '../pages/calendar/page';
import Clients from '../pages/clients/page';
import Employees from '../pages/employees/page';
import Home from '../pages/home/page';
import Login from '../pages/login/page';
import Products from '../pages/products/page';
import Sales from '../pages/sales/page';

export type PagesKey = 'login';

export default {
    login: { path: '/', accesslevel: [], element: <Login /> },
    home: { path: '/home', accesslevel: [1, 2, 3], element: <Home /> },
    employees: { path: '/employees', accesslevel: [3], element: <Employees /> },
    clients: { path: '/clients', accesslevel: [2, 3], element: <Clients /> },
    calendar: { path: '/calendar', accesslevel: [2, 3], element: <Calendar /> },
    products: { path: '/product', accesslevel: [2, 3], element: <Products /> },
    sales: { path: '/sales', accesslevel: [2, 3], element: <Sales /> },
    budgets: { path: '/budgets', accesslevel: [2, 3], element: <Budgets /> },
    notfound: { path: '*', accesslevel: [], element: <NotFound /> },
};
