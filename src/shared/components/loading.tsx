import { Box } from '@mui/material';
import { Vortex } from 'react-loader-spinner';
import { Wave } from 'react-animated-text';
import { useAppSelector } from '../../store';
import { sytemSelectAll } from '../../store/system.slice';
import { useEffect, useState } from 'react';
export default function LoadingScreen() {
    const { loading, loadingMsg } = useAppSelector(sytemSelectAll);
    const [show, setShow] = useState<boolean>(false);
    const [msg, setMsg] = useState<string>('');
    useEffect(() => {
        setShow(loading);
        setMsg(loadingMsg);
    }, [loading, loadingMsg]);
    return (
        show && (
            <Box
                sx={{
                    position: 'fixed',
                    zIndex: '999999999999999999',
                    height: '100vh',
                    width: '100vw',
                    backgroundColor: 'rgba(0,0,0,30%)',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <Vortex
                        visible={true}
                        height='100'
                        width='100'
                        ariaLabel='vortex-loading'
                        wrapperStyle={{}}
                        wrapperClass='vortex-wrapper'
                        colors={['red', 'white', 'gray', 'red', 'white', 'gray']}
                    />
                    <div
                        style={{
                            color: 'gray',
                            fontSize: '2rem',
                            fontWeight: 'bolder',
                        }}
                    >
                        <Wave text={msg.toUpperCase()} effect='fadeIn' effectChange={2.0} />
                    </div>
                </Box>
            </Box>
        )
    );
}
