/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { useSelector } from 'react-redux';
import { clientSelectAll, setCodClient, setModalInfo } from '../../redux/slice';
import { useAppDispatch } from '../../../../store';
import validateCNPJ from '../../../../shared/utils/functions/validateCnpj';

import { mascaraOuRemove } from '../../../../shared/utils/functions/formatDoc';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '70vh',
    bgcolor: 'background.paper',
    overflow: 'auto',
    boxShadow: 24,
    p: 4,
};
interface Props {
    data: any; // Você pode substituir 'any' pelo tipo específico do seu JSON, se souber
}
const JsonToHtml: React.FC<Props> = ({ data }) => {
    const convertDataToHtml = (data: any): string => {
        let html = '<div ">';
        for (const key in data) {
            if (Array.isArray(data[key])) {
                html += `<h4>${key.split('_').join(' ')}</h4><ul>`;
                data[key].forEach((item: any) => {
                    html += '<li>';
                    html += convertDataToHtml(item);
                    html += '</li>';
                });
                html += '</ul>';
            } else if (typeof data[key] === 'object' && data[key] !== null) {
                html += `<h4>${key.split('_').join(' ')}</h4>`;
                html += convertDataToHtml(data[key]);
            } else {
                html += `<p><strong>${key.split('_').join(' ')}</strong>: ${data[key]}</p>`;
            }
        }
        html += '</div>';
        return html;
    };

    return <div dangerouslySetInnerHTML={{ __html: convertDataToHtml(data) }} />;
};

export default function InfoClientModal() {
    const dispatch = useAppDispatch();
    const { showModalInfoClient, clients, codClient } = useSelector(clientSelectAll);
    const [data, setData] = React.useState<any>(null);
    const [open, setOpen] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (codClient && showModalInfoClient) {
            console.log(codClient);
            const client = clients.find((c) => Number(c.cod) === Number(codClient));
            console.log(client);
            if (client) {
                validateCNPJ(mascaraOuRemove(client.doc, client.tipoDoc, true))
                    .then((r) => {
                        console.log(r);
                        if (!r) {
                            dispatch(setCodClient(null));
                            dispatch(setModalInfo(false));
                            setOpen(false);
                            return;
                        }
                        setData(r);
                        setOpen(showModalInfoClient);
                    })
                    .catch((e) => {
                        dispatch(setCodClient(null));
                        dispatch(setModalInfo(false));
                        setOpen(false);
                        console.log(e);
                    });
            }
        } else {
            dispatch(setCodClient(null));
            dispatch(setModalInfo(false));
        }
    }, [codClient, showModalInfoClient]);

    return (
        <Modal
            open={open}
            onClose={() => dispatch(setModalInfo(false))}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <h3>Informações de {data?.razao_social} na Receita Federal</h3>
                    <JsonToHtml data={data} />
                </Box>
            </Fade>
        </Modal>
    );
}
