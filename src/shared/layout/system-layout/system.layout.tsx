import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store';
import { Pages } from '../../../routes';
import { authSelectAll } from '../../../pages/login/redux/slice/index';
import HeaderAppBar from './components/app-bar';

export default function SystemLayout() {
    const navigate = useNavigate();
    const { islogged, user } = useAppSelector(authSelectAll);

    const path = window.location.pathname;

    useEffect(() => {
        if (!islogged) {
            navigate(Pages.login.path);
            return;
        }

        // if (pages.userCad.path === path || pages.user.path === path) {
        //     if (loggedUser.perfil.id !== '3') navigate(-1);
        // }
    }, [islogged, path]);

    return islogged ? (
        <HeaderAppBar loggedUser={user}>
            <Outlet />
        </HeaderAppBar>
    ) : (
        <></>
    );
}
