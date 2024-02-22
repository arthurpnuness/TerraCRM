import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    useScrollTrigger,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { User } from '../../../../contratcs/user.interface';
import LogoutIcon from '@mui/icons-material/Logout';
import { ReactElement, cloneElement, useState } from 'react';
import SideBarDrawer from '../side-bar';
import { useAppDispatch } from '../../../../../store';
import { logout } from '../../../../../pages/login/redux/slice';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: ReactElement;
    loggedUser: User | null;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 90,
    },
}));

export default function HeaderAppBar(props: Props) {
    const dispatch = useAppDispatch();

    const auth = true;
    // const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleLogout = () => {
        dispatch(logout());
    };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <ElevationScroll {...props}>
                <AppBar color='error' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <StyledToolbar>
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
                            <img
                                src='./img/terralogoagro2.png'
                                style={{
                                    width: '10rem',

                                    marginRight: 10,
                                    marginTop: '-2.5rem',
                                    marginBottom: '-5rem',
                                }}
                            />
                        </Box>
                        {auth && (
                            <Box>
                                <IconButton
                                    size='large'
                                    aria-label='account of current user'
                                    aria-controls='menu-appbar'
                                    aria-haspopup='true'
                                    onClick={handleMenu}
                                    color='inherit'
                                >
                                    <Avatar>AD</Avatar>
                                </IconButton>
                                <Menu
                                    id='menu-appbar'
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <LogoutIcon />
                                        Sair
                                    </MenuItem>
                                </Menu>
                            </Box>
                        )}
                    </StyledToolbar>
                </AppBar>
            </ElevationScroll>
            <SideBarDrawer />
            <Box component='main' sx={{ flexGrow: 1, p: 0 }}>
                <StyledToolbar />
                <main>{props.children}</main>
            </Box>
        </Box>
    );
}
