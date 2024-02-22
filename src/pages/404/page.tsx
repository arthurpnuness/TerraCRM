/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledBox = styled(Box)(({ theme }) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default,
    },
    emoji: {
        fontSize: '4rem',
        marginBottom: theme.spacing(2),
    },
}));
export default function NotFound() {
    return (
        <StyledBox>
            <Typography variant='h1' gutterBottom>
                404
            </Typography>
            <Typography variant='h5' gutterBottom>
                Página não encontrada
            </Typography>
            <Typography variant='body1' gutterBottom>
                A página que você está procurando pode ter sido removida, seu nome alterado ou estar
                temporariamente indisponível.
            </Typography>
            <Button variant='contained' color='primary' component={Link} to='/'>
                Voltar para a página inicial
            </Button>
        </StyledBox>
    );
}
