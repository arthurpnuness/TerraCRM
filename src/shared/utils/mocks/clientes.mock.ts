import { setListClient } from '../../../pages/clients/redux/slice';
import { AppDispatch } from '../../../store';

const listClients = [
    {
        cod: 1167.39,
        tipoPessoa: 'F',
        nome: 'Krista Blankenship',
        nome2: 'Biohab',
        tipoDoc: 'CNH',
        doc: '44186478726683',
        dataDoc: '12/31/2017',
        situacao: 'inativo',
        telefone: '(83) 42839-1890',
        email: 'krista_blankenship@biohab.nr',
        cep: '30.337-12',
        logradouro: 'Mermaid Avenue',
        logradouroNumero: 77901,
        logradouroComplemento: 'ap',
        bairro: 'Puckett',
        cidade: 'Sanborn',
        estado: 'Colorado',
        pais: 'Belgium',
    },
    {
        cod: 1191.75,
        tipoPessoa: 'F',
        nome: 'Farmer Chen',
        nome2: 'Kegular',
        tipoDoc: 'CPF',
        doc: '87742881906495',
        dataDoc: '05/02/1972',
        situacao: 'ativo',
        telefone: '(22) 23321-5614',
        email: 'farmer_chen@kegular.lc',
        cep: '77.828-83',
        logradouro: 'Farragut Place',
        logradouroNumero: 89014,
        logradouroComplemento: 'casa',
        bairro: 'Austin',
        cidade: 'Whipholt',
        estado: 'Montana',
        pais: 'Madagascar',
    },
    {
        cod: 1358.08,
        tipoPessoa: 'F',
        nome: 'Martha Holcomb',
        nome2: 'Aeora',
        tipoDoc: 'CNH',
        doc: '9050257450312',
        dataDoc: '04/15/1992',
        situacao: 'inativo',
        telefone: '(14) 1404-4005',
        email: 'martha_holcomb@aeora.mango',
        cep: '56.463-18',
        logradouro: 'King Street',
        logradouroNumero: 35574,
        logradouroComplemento: 'ap',
        bairro: 'Barry',
        cidade: 'Rockhill',
        estado: 'Mississippi',
        pais: 'Kiribati',
    },
    {
        cod: 3307.46,
        tipoPessoa: 'J',
        nome: 'Kane Bonner',
        nome2: 'Dancity',
        tipoDoc: 'CNPJ',
        doc: '45100143000103',
        dataDoc: '11/13/2019',
        situacao: 'inativo',
        telefone: '(14) 2523-4953',
        email: 'kane_bonner@dancity.dance',
        cep: '47.625-68',
        logradouro: 'Emmons Avenue',
        logradouroNumero: 76418,
        logradouroComplemento: 'casa',
        bairro: 'Alston',
        cidade: 'Grayhawk',
        estado: 'Delaware',
        pais: 'Luxembourg',
    },
    {
        cod: 2659.47,
        tipoPessoa: 'F',
        nome: 'Randolph Hawkins',
        nome2: 'Norsup',
        tipoDoc: 'CPF',
        doc: '41247749672218',
        dataDoc: '10/19/2019',
        situacao: 'inativo',
        telefone: '(15) 85950-1852',
        email: 'randolph_hawkins@norsup.exposed',
        cep: '71.615-76',
        logradouro: 'Stewart Street',
        logradouroNumero: 4945,
        logradouroComplemento: 'ap',
        bairro: 'Cannon',
        cidade: 'Swartzville',
        estado: 'New Jersey',
        pais: 'Comoros',
    },
    {
        cod: 1550.38,
        tipoPessoa: 'J',
        nome: 'Armstrong Ortega',
        nome2: 'Entogrok',
        tipoDoc: 'CNPJ',
        doc: '63657100222004',
        dataDoc: '05/04/2022',
        situacao: 'inativo',
        telefone: '(29) 65271-3223',
        email: 'armstrong_ortega@entogrok.info',
        cep: '56.283-57',
        logradouro: 'Jackson Place',
        logradouroNumero: 45062,
        logradouroComplemento: 'sala',
        bairro: 'Kerr',
        cidade: 'Wolcott',
        estado: 'District Of Columbia',
        pais: 'Palau',
    },
    {
        cod: 3726.75,
        tipoPessoa: 'F',
        nome: 'Paulette Clarke',
        nome2: 'Bedder',
        tipoDoc: 'CIN',
        doc: '91490671645430',
        dataDoc: '10/19/1980',
        situacao: 'inativo',
        telefone: '(83) 98836-3539',
        email: 'paulette_clarke@bedder.vg',
        cep: '40.123-76',
        logradouro: 'Winthrop Street',
        logradouroNumero: 61336,
        logradouroComplemento: 'casa',
        bairro: 'Melton',
        cidade: 'Hiseville',
        estado: 'Illinois',
        pais: 'Northern Mariana Islands',
    },
    {
        cod: 3072.62,
        tipoPessoa: 'J',
        nome: 'Lambert Wolf',
        nome2: 'Assurity',
        tipoDoc: 'CNPJ',
        doc: '44878446902017',
        dataDoc: '04/19/1970',
        situacao: 'ativo',
        telefone: '(95) 53043-4160',
        email: 'lambert_wolf@assurity.nl',
        cep: '28.913-70',
        logradouro: 'Butler Place',
        logradouroNumero: 89700,
        logradouroComplemento: 'ap',
        bairro: 'Moss',
        cidade: 'Ilchester',
        estado: 'Tennessee',
        pais: 'Bulgaria',
    },
    {
        cod: 1812.97,
        tipoPessoa: 'J',
        nome: 'Fischer Santos',
        nome2: 'Puria',
        tipoDoc: 'CNPJ',
        doc: '29245054930809',
        dataDoc: '01/10/2012',
        situacao: 'ativo',
        telefone: '(73) 14681-5442',
        email: 'fischer_santos@puria.gf',
        cep: '43.938-95',
        logradouro: 'Milford Street',
        logradouroNumero: 69798,
        logradouroComplemento: 'sala',
        bairro: 'Watkins',
        cidade: 'Flintville',
        estado: 'Missouri',
        pais: 'Portugal',
    },
    {
        cod: 3490.87,
        tipoPessoa: 'F',
        nome: 'Hill Hurst',
        nome2: 'Fanfare',
        tipoDoc: 'CPF',
        doc: '40927262378389',
        dataDoc: '03/07/2016',
        situacao: 'inativo',
        telefone: '(74) 90446-2932',
        email: 'hill_hurst@fanfare.autos',
        cep: '84.433-24',
        logradouro: 'Bridgewater Street',
        logradouroNumero: 59561,
        logradouroComplemento: 'ap',
        bairro: 'Hughes',
        cidade: 'Enoree',
        estado: 'Michigan',
        pais: 'Liechtenstein',
    },
];

const postMock = (dispatch: AppDispatch) => {
    dispatch(setListClient(listClients));
};
export default postMock;
