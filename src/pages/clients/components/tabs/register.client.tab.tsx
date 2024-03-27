import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';

import { useEffect, useState } from 'react';
import validateCNPJ from '../../../../shared/utils/functions/validateCnpj';
import { mascaraOuRemove } from '../../../../shared/utils/functions/formatDoc';
import { useSelector } from 'react-redux';
import { clientSelectAll } from '../../redux/slice';
import { Client } from '../../../../shared/contratcs/client.interface';
import { createdClient } from '../../redux/thunk';
import { useAppDispatch } from '../../../../store';

export default function RegisterClient() {
    const dispatch = useAppDispatch();
    const { clientEdit } = useSelector(clientSelectAll);
    const [codigo, setCodigo] = useState<string | number | null>(null);
    const [tipoPessoa, setTipoPessoa] = useState<'F' | 'J' | 'N'>('N');
    const [nome, setNome] = useState<string>('');
    const [nome2, setNome2] = useState<string>('');
    const [tipoDoc, setTipoDoc] = useState<string>('');
    const [doc, setDoc] = useState<string>('');
    const [dataDoc, setDataDoc] = useState<string>('');
    const [situacao, setSituacao] = useState<string>('');
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

    useEffect(() => {
        if (clientEdit) {
            setCodigo(clientEdit.cod);
            setTipoPessoa(clientEdit.tipoPessoa as 'F' | 'J' | 'N');
            setNome(clientEdit.nome);
            setNome2(clientEdit.nome2 || '');
            setTipoDoc(clientEdit.tipoDoc);
            setDoc(mascaraOuRemove(clientEdit.doc, clientEdit.tipoDoc, true));
            setDataDoc(mascaraOuRemove(clientEdit.dataDoc, 'data', true));
            setSituacao(clientEdit.situacao || '');
            setTelefone(mascaraOuRemove(clientEdit.telefone, 'telefone', true));
            setEmail(clientEdit.email);
            setCep(mascaraOuRemove(clientEdit.cep, 'cep', true));
            setLogradouro(clientEdit.logradouro);
            setLogradouroNumero(String(clientEdit.logradouroNumero));
            setLogradouroComplemento(clientEdit.logradouroComplemento);
            setBairro(clientEdit.bairro);
            setCidade(clientEdit.cidade);
            setEstado(clientEdit.estado);
            setPais(clientEdit.pais);
        }
    }, []);

    useEffect(() => {
        if (!clientEdit && tipoPessoa === 'J' && doc.length === 18) {
            validateCNPJ(mascaraOuRemove(doc, tipoDoc, false)).then((r) => {
                console.log(r);
                setNome(r.razao_social);
                setNome2(r.nome_fantasia || '');
                const dataReverse = r.estabelecimento.data_inicio_atividade
                    .split('-')
                    .reverse()
                    .join('-');
                setDataDoc(mascaraOuRemove(dataReverse, 'data', true));
                setSituacao(r.estabelecimento.situacao_cadastral);
                setTelefone(
                    mascaraOuRemove(
                        `${r.estabelecimento.ddd1 + r.estabelecimento.telefone1}`,
                        'telefone',
                        true
                    )
                );
                setEmail(r.estabelecimento.email);
                setCep(mascaraOuRemove(r.estabelecimento.cep, 'cep', true));
                setLogradouro(
                    `${r.estabelecimento.tipo_logradouro} ${r.estabelecimento.logradouro}`
                );
                setLogradouroNumero(r.estabelecimento.numero);
                setLogradouroComplemento(r.estabelecimento.complemento);
                setBairro(r.estabelecimento.bairro);
                setCidade(r.estabelecimento.cidade.nome);
                setEstado(r.estabelecimento.estado.nome);
                setPais(r.estabelecimento.pais.nome);
            });
        }
    }, [tipoPessoa, doc]);

    const formatCharForVarchar = (char: 'F' | 'J' | 'N') => {
        switch (char) {
            case 'F':
                return 'Pessoa Física';
            case 'J':
                return 'Pessoa Jurídica';

            default:
                return 'Nenhum';
        }
    };

    const handleClient = () => {
        const data: Client = {
            cod: codigo,
            tipoPessoa,
            nome,
            nome2,
            tipoDoc,
            doc: mascaraOuRemove(doc, tipoDoc, false),
            dataDoc,
            situacao,
            telefone,
            email,
            cep,
            logradouro,
            logradouroNumero,
            logradouroComplemento,
            bairro,
            cidade,
            estado,
            pais,
        };
        if (
            (nome || nome2) &&
            tipoDoc &&
            doc &&
            dataDoc &&
            telefone &&
            email &&
            cep &&
            logradouro &&
            logradouroNumero &&
            logradouroComplemento &&
            bairro &&
            cidade &&
            estado &&
            pais
        ) {
            dispatch(createdClient(data));
        } else {
            alert('dados incompletos!');
        }
    };
    const handleClean = () => {
        setCodigo(null);
        setNome('');
        setNome2('');
        setTipoDoc('');
        setDoc('');
        setDataDoc('');
        setSituacao('');
        setTelefone('');
        setEmail('');
        setCep('');
        setLogradouro('');
        setLogradouroNumero('');
        setLogradouroComplemento('');
        setBairro('');
        setCidade('');
        setEstado('');
        setPais('');
    };

    return (
        <Box width={'100%'} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {!clientEdit && tipoPessoa === 'N' && (
                <Box
                    width={'100%'}
                    sx={{
                        p: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography> Selecine Tipo de CLiente</Typography>
                    <Button
                        variant='contained'
                        onClick={() => {
                            setTipoDoc('');
                            setTipoPessoa('F');
                        }}
                        sx={{ m: 4, width: '10rem' }}
                    >
                        Pessoa Física
                    </Button>
                    <Button
                        variant='contained'
                        onClick={() => {
                            setTipoDoc('CNPJ');
                            setTipoPessoa('J');
                        }}
                        sx={{ width: '10rem' }}
                    >
                        Pessoa Jurídica
                    </Button>
                </Box>
            )}
            {tipoPessoa !== 'N' && (
                <Box width={'100%'}>
                    <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        sx={{ m: '0.7rem 0.4rem 0.1rem 0.4rem ' }}
                    >
                        <TextField
                            label='Código'
                            id='outlined-start-adornment'
                            sx={{ width: '10rem' }}
                            disabled
                            size='small'
                            variant='outlined'
                            value={codigo}
                        />

                        <Box>
                            <Button sx={{ mr: 2 }} onClick={handleClient}>
                                Salvar
                            </Button>
                            {!codigo && (
                                <Button sx={{ mr: 2 }} onClick={handleClean}>
                                    Limpar
                                </Button>
                            )}
                            <Button
                                onClick={() => {
                                    handleClean();
                                    (
                                        document.getElementById(
                                            'full-width-tab-Clientes-0'
                                        ) as HTMLButtonElement
                                    ).click();
                                }}
                            >
                                {!codigo ? 'Voltar' : 'Cancelar'}
                            </Button>
                        </Box>
                    </Box>

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
                        <legend>{tipoPessoa === 'J' ? 'Dados Empresa' : 'Dados Pessoais'}</legend>

                        <TextField
                            label={tipoPessoa === 'J' ? 'Razão Social' : 'Nome'}
                            id='outlined-start-adornment'
                            sx={{ m: '0.1rem 0.4rem', width: '76.5%' }}
                            size='small'
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <TextField
                            label={'Tipo Cliente'}
                            id='outlined-start-adornment'
                            sx={{ m: '0.1rem 0.4rem', width: '20%' }}
                            size='small'
                            value={formatCharForVarchar(tipoPessoa)}
                            disabled
                        />
                        {tipoPessoa === 'J' && (
                            <>
                                <TextField
                                    label='Nome Fantasia'
                                    id='outlined-start-adornment'
                                    sx={{ m: '0.3rem 0.4rem', width: '76.5%' }}
                                    size='small'
                                    value={nome2}
                                    onChange={(e) => setNome2(e.target.value)}
                                />
                                <br />
                            </>
                        )}
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
                                disabled={tipoDoc === 'CNPJ'}
                            >
                                {tipoDoc === 'CNPJ' && <MenuItem value={'CNPJ'}>CNPJ</MenuItem>}

                                <MenuItem value={''}></MenuItem>
                                <MenuItem value={'CIN'}>CIN</MenuItem>
                                <MenuItem value={'CPF'}>CPF</MenuItem>
                                <MenuItem value={'CNH'}>CNH</MenuItem>
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

                        {tipoPessoa === 'J' && (
                            <TextField
                                label='Situação Cadastral'
                                id='outlined-start-adornment'
                                sx={{ m: '0.3rem 0.4rem', width: '20%' }}
                                size='small'
                                value={situacao}
                                disabled
                            />
                        )}

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
            )}
        </Box>
    );
}
