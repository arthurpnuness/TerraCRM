import consultarCNPJ from 'consultar-cnpj';

export default async function validateCNPJ(cnpj: string) {
    try {
        const empresa = await consultarCNPJ(cnpj);
        console.log(empresa);
        return empresa;
    } catch (e) {
        console.log(e);
        return null;
    }
}
