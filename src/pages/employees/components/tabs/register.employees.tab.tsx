import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from '@mui/material';

import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { clientSelectAll } from '../../../clients/redux/slice';
import { mascaraOuRemove } from '../../../../shared/utils/functions/formatDoc';
import validateCNPJ from '../../../../shared/utils/functions/validateCnpj';

// import { useAppDispatch } from '../../../../store';
export default function RegisterEmployees() {
    // const dispatch = useAppDispatch();
    const { clientEdit } = useSelector(clientSelectAll);
    const [codigo, setCodigo] = useState<string | number | null>(null);

    const [nome, setNome] = useState<string>('');
    const [tipo, setTipo] = useState<string>('');

    const [tipoDoc, setTipoDoc] = useState<string>('');
    const [doc, setDoc] = useState<string>('');
    const [dataDoc, setDataDoc] = useState<string>('');

    const [telefone, setTelefone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cep, setCep] = useState<string>('');
    const [logradouro, setLogradouro] = useState<string>('');
    const [logradouroNumero, setLogradouroNumero] = useState<string>('');
    const [logradouroComplemento, setLogradouroComplemento] = useState<string>('');
    const [bairro, setBairro] = useState<string>('');
    const [cidade, setCidade] = useState<string>('');
    const [estado, setEstado] = useState<string>('');
    const [pais, setPais] = useState<string>('');

    // useEffect(() => {
    //     if (clientEdit) {
    //         setCodigo(clientEdit.cod);
    //         setTipoPessoa(clientEdit.tipoPessoa as '3' | '1' | 'N');
    //         setNome(clientEdit.nome);

    //         setTipoDoc(clientEdit.tipoDoc);
    //         setDoc(mascaraOuRemove(clientEdit.doc, clientEdit.tipoDoc, true));
    //         setDataDoc(mascaraOuRemove(clientEdit.dataDoc, 'data', true));
    //         setSituacao(clientEdit.situacao || '');
    //         setTelefone(mascaraOuRemove(clientEdit.telefone, 'telefone', true));
    //         setEmail(clientEdit.email);
    //         setCep(mascaraOuRemove(clientEdit.cep, 'cep', true));
    //         setLogradouro(clientEdit.logradouro);
    //         setLogradouroNumero(String(clientEdit.logradouroNumero));
    //         setLogradouroComplemento(clientEdit.logradouroComplemento);
    //         setBairro(clientEdit.bairro);
    //         setCidade(clientEdit.cidade);
    //         setEstado(clientEdit.estado);
    //         setPais(clientEdit.pais);
    //     }
    // }, []);

    // useEffect(() => {
    //     if (!clientEdit && tipoPessoa === 'J' && doc.length === 18) {
    //         validateCNPJ(mascaraOuRemove(doc, tipoDoc, false)).then((r) => {
    //             console.log(r);
    //             setNome(r.razao_social);
    //             setNome2(r.nome_fantasia || '');
    //             const dataReverse = r.estabelecimento.data_inicio_atividade
    //                 .split('-')
    //                 .reverse()
    //                 .join('-');
    //             setDataDoc(mascaraOuRemove(dataReverse, 'data', true));
    //             setSituacao(r.estabelecimento.situacao_cadastral);
    //             setTelefone(
    //                 mascaraOuRemove(
    //                     `${r.estabelecimento.ddd1 + r.estabelecimento.telefone1}`,
    //                     'telefone',
    //                     true
    //                 )
    //             );
    //             setEmail(r.estabelecimento.email);
    //             setCep(mascaraOuRemove(r.estabelecimento.cep, 'cep', true));
    //             setLogradouro(
    //                 `${r.estabelecimento.tipo_logradouro} ${r.estabelecimento.logradouro}`
    //             );
    //             setLogradouroNumero(r.estabelecimento.numero);
    //             setLogradouroComplemento(r.estabelecimento.complemento);
    //             setBairro(r.estabelecimento.bairro);
    //             setCidade(r.estabelecimento.cidade.nome);
    //             setEstado(r.estabelecimento.estado.nome);
    //             setPais(r.estabelecimento.pais.nome);
    //         });
    //     }
    // }, [tipoPessoa, doc]);

    return (
        <Box width={'100%'} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Box width={'100%'}>
                <TextField
                    label='Código'
                    id='outlined-start-adornment'
                    sx={{ m: '0.4rem 0.4rem 0.1rem 0.4rem ', width: '10rem' }}
                    disabled
                    size='small'
                    variant='outlined'
                    value={codigo}
                />

                <Button>Salvar</Button>
                {!codigo && <Button>Limpar</Button>}
                <Button>Cancelar</Button>

                <fieldset
                    style={{
                        border: '1px solid #d5d5d5',
                        borderRadius: '1rem',
                        color: '#b4b4b4',
                        fontSize: '0.9rem',
                        fontWeight: 'normal',
                        fontFamily: 'Roboto',
                    }}
                >
                    <legend>{'Dados Pessoais'}</legend>

                    <TextField
                        label={'Nome'}
                        id='outlined-start-adornment'
                        sx={{ m: '0.1rem 0.4rem', width: '76.5%' }}
                        size='small'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />

                    <FormControl sx={{ m: '0.1rem 0.4rem', width: '20%' }} size='small'>
                        <InputLabel id='tipo-emp-select-label'>Tipo</InputLabel>
                        <Select
                            labelId='tipo-emp-select-label'
                            id='tipo-emp-select'
                            value={tipo}
                            label='Tipo'
                            onChange={(e: SelectChangeEvent) => {
                                setTipo(e.target.value as string);
                            }}
                        >
                            <MenuItem value={''}></MenuItem>
                            <MenuItem value={'G'}>Gerente</MenuItem>
                            <MenuItem value={'F'}>Funcionário</MenuItem>
                            <MenuItem value={'V'}>Vendedor Externo</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: '0.3rem 0.4rem', width: '20%' }} size='small'>
                        <InputLabel id='tipo-doc-select-label'>Tipo Documento</InputLabel>
                        <Select
                            labelId='tipo-doc-select-label'
                            id='tipo-doc-select'
                            value={tipoDoc}
                            label='Tipo Documento'
                            onChange={(e: SelectChangeEvent) => {
                                setTipoDoc(e.target.value as string);
                            }}
                        >
                            <MenuItem value={''}></MenuItem>
                            <MenuItem value={'CIN'}>CIN</MenuItem>
                            <MenuItem value={'CPF'}>CPF</MenuItem>
                            <MenuItem value={'CNH'}>CNH</MenuItem>
                            <MenuItem value={'CNPJ'}>CNPJ</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label='Nº Documento'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '55%' }}
                        size='small'
                        value={doc}
                        onChange={(e) => {
                            setDoc(mascaraOuRemove(e.target.value, tipoDoc, true));
                        }}
                    />
                    <TextField
                        label='Data de expedição'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '20%' }}
                        size='small'
                        value={dataDoc}
                        onChange={(e) => {
                            setDataDoc(mascaraOuRemove(e.target.value, 'data', true));
                        }}
                    />

                    <TextField
                        label='Telefone'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '30%' }}
                        size='small'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                    <TextField
                        label='E-mail'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '45%' }}
                        size='small'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>
                <fieldset
                    style={{
                        border: '1px solid #d5d5d5',
                        borderRadius: '1rem',
                        color: '#b4b4b4',
                        fontSize: '0.9rem',
                        fontWeight: 'normal',
                        fontFamily: 'Roboto',
                    }}
                >
                    <legend>Endereço</legend>
                    <TextField
                        label='CEP'
                        id='outlined-start-adornment'
                        sx={{ m: '0.1rem 0.4rem', width: '20%' }}
                        size='small'
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                    />
                    <TextField
                        label='Logradouro'
                        id='outlined-start-adornment'
                        sx={{ m: '0.1rem 0.4rem', width: '75%' }}
                        size='small'
                        value={logradouro}
                        onChange={(e) => setLogradouro(e.target.value)}
                    />
                    <TextField
                        label='Nº'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '20%' }}
                        size='small'
                        value={logradouroNumero}
                        onChange={(e) => setLogradouroNumero(e.target.value)}
                    />
                    <TextField
                        label='Complemento'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '20%' }}
                        size='small'
                        value={logradouroComplemento}
                        onChange={(e) => setLogradouroComplemento(e.target.value)}
                    />
                    <TextField
                        label='Bairro'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '30%' }}
                        size='small'
                        value={bairro}
                        onChange={(e) => setBairro(e.target.value)}
                    />
                    <TextField
                        label='Cidade'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '33%' }}
                        size='small'
                        value={cidade}
                        onChange={(e) => setCidade(e.target.value)}
                    />
                    <TextField
                        label='Estado'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '30%' }}
                        size='small'
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                    />
                    <TextField
                        label='País'
                        id='outlined-start-adornment'
                        sx={{ m: '0.3rem 0.4rem', width: '30%' }}
                        size='small'
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                    />
                </fieldset>
            </Box>
        </Box>
    );
}
