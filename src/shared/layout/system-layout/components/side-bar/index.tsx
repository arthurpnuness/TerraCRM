import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';

import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import BadgeIcon from '@mui/icons-material/Badge';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FactoryIcon from '@mui/icons-material/Factory';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SavingsIcon from '@mui/icons-material/Savings';
import { useLocation, useNavigate } from 'react-router-dom';
import { Pages } from '../../../../../routes';
import { useAppSelector } from '../../../../../store';
import { authSelectAll } from '../../../../../pages/login/redux/slice';

const drawerWidth = 240;

export default function SideBarDrawer() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { user } = useAppSelector(authSelectAll);
    const { home, budgets, clients, calendar, employees, products, sales } = Pages;
    return (
        <Drawer
            variant='permanent'
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box
                sx={{
                    paddingTop: '2rem',
                    overflow: 'auto',
                }}
            >
                <List>
                    <ListItem
                        key={1}
                        disablePadding
                        sx={{ backgroundColor: home.path === pathname ? '#ecebeb' : 'inherit' }}
                    >
                        <ListItemButton onClick={() => navigate(home.path)}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItemButton>
                    </ListItem>
                    {user && clients.accesslevel.includes(user.accessLevel) && (
                        <ListItem
                            key={2}
                            disablePadding
                            sx={{
                                backgroundColor: clients.path === pathname ? '#ecebeb' : 'inherit',
                            }}
                        >
                            <ListItemButton onClick={() => navigate(clients.path)}>
                                <ListItemIcon>
                                    <EmojiPeopleIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Clientes'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {user && employees.accesslevel.includes(user.accessLevel) && (
                        <ListItem
                            key={3}
                            disablePadding
                            sx={{
                                backgroundColor:
                                    employees.path === pathname ? '#ecebeb' : 'inherit',
                            }}
                        >
                            <ListItemButton onClick={() => navigate(employees.path)}>
                                <ListItemIcon>
                                    <BadgeIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Funcionários'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {user && products.accesslevel.includes(user.accessLevel) && (
                        <ListItem
                            key={4}
                            disablePadding
                            sx={{
                                backgroundColor: products.path === pathname ? '#ecebeb' : 'inherit',
                            }}
                        >
                            <ListItemButton onClick={() => navigate(products.path)}>
                                <ListItemIcon>
                                    <FactoryIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Produtos'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {user && budgets.accesslevel.includes(user.accessLevel) && (
                        <ListItem
                            key={4}
                            disablePadding
                            sx={{
                                backgroundColor: budgets.path === pathname ? '#ecebeb' : 'inherit',
                            }}
                        >
                            <ListItemButton onClick={() => navigate(budgets.path)}>
                                <ListItemIcon>
                                    <RequestQuoteIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Orçamentos'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {user && sales.accesslevel.includes(user.accessLevel) && (
                        <ListItem
                            key={4}
                            disablePadding
                            sx={{
                                backgroundColor: sales.path === pathname ? '#ecebeb' : 'inherit',
                            }}
                        >
                            <ListItemButton onClick={() => navigate(sales.path)}>
                                <ListItemIcon>
                                    <SavingsIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Vendas'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                    {user && calendar.accesslevel.includes(user.accessLevel) && (
                        <ListItem
                            key={4}
                            disablePadding
                            sx={{
                                backgroundColor: calendar.path === pathname ? '#ecebeb' : 'inherit',
                            }}
                        >
                            <ListItemButton onClick={() => navigate(calendar.path)}>
                                <ListItemIcon>
                                    <CalendarMonthIcon />
                                </ListItemIcon>
                                <ListItemText primary={'Calendário'} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
}
