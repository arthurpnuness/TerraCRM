import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../store';
import { useEffect } from 'react';
import { Pages } from '../../../routes';
import { authSelectAll } from '../../../pages/login/redux/slice';

export default function PublicLayout() {
    const { islogged } = useAppSelector(authSelectAll);
    const navigate = useNavigate();

    useEffect(() => {
        if (islogged) {
            navigate(Pages.home.path);
        }
    }, [islogged, navigate]);

    return <Outlet />;
}
