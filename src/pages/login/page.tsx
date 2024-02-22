import { Box, FormControl, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useAppDispatch } from '../../store';
import { useState } from 'react';
import { loginFirebase } from './redux/thunk';
export default function Login() {
    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    function handleLogin() {
        const data = {
            usuario: name,
            senha: pass,
        };
        dispatch(loginFirebase(data));
        setName('');
        setPass('');
    }

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url("./img/img2.jpeg")`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                }}
            ></Box>
            <Box
                sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#071146',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: 'rgba(255, 255, 255, 0.096)',
                        backdropFilter: 'blur(5px)',
                        WebkitBackdropFilter: 'blur(5px)',
                        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
                        width: '30rem',
                        height: '37rem',
                        paddingX: '40px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',

                        gap: '4px',
                    }}
                >
                    <img src='./img/terralogoagro.png' width='200rem' alt='logo' />
                    <Typography variant='h5' color={'white'} mt='-2.5rem' mb='0.2rem'>
                        Bem-vindo,
                    </Typography>
                    <Typography variant='body2' color={'white'} mb='2rem'>
                        Sistema de envio e analises de Orçamentos
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            width: '100%',
                        }}
                    >
                        <FormControl fullWidth>
                            <TextField
                                id='name'
                                label='Usuário'
                                value={name}
                                onChange={({ target: { value } }) => setName(value)}
                                onKeyDown={({ key }) => {
                                    if (key === 'Enter') {
                                        document.getElementById('pass')?.focus();
                                    }
                                }}
                                InputLabelProps={{
                                    style: { color: 'white' }, // estilo para o texto do label ser branco
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                id='pass'
                                type={showPassword ? 'text' : 'password'}
                                value={pass}
                                label='Senha'
                                onChange={({ target: { value } }) => setPass(value)}
                                onKeyDown={({ key }) => {
                                    if (key === 'Enter') handleLogin();
                                }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                                edge='end'
                                                sx={{
                                                    color: 'whitesmoke',
                                                }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                InputLabelProps={{
                                    style: { color: 'white' }, // estilo para o texto do label ser branco
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(255, 255, 255, 0.3)',
                                    },
                                }}
                            />
                        </FormControl>
                        {/* <Link
                                href={pages.recover.path}
                                underline='none'
                                sx={{ alignSelf: 'flex-end' }}
                            >
                                Esqueci minha senha
                            </Link> */}

                        {/* <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={remember}
                                        onChange={() => setRemember(!remember)}
                                    />
                                }
                                label='Continuar conectado'
                                sx={{ alignSelf: 'flex-start' }}
                            /> */}

                        <LoadingButton
                            loading={status === 'loading'}
                            variant='contained'
                            onClick={handleLogin}
                            style={{ width: '100%', marginTop: 25 }}
                            disabled={!name || !pass}
                        >
                            Entrar
                        </LoadingButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
