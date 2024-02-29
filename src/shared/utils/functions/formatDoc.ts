export const mascaraOuRemove = (
    value: string | number,
    typeMask: string,
    mask: boolean
): string => {
    let text;
    if (typeof value === 'number') {
        text = String(value);
    } else {
        text = value;
    }
    text = text.replace(/\D/g, '');
    if (mask) {
        switch (typeMask.toLowerCase()) {
            case 'telefone':
                if (text.length === 10) {
                    text = `(${text.substring(0, 2)}) ${text.substring(2, 6)}-${text.substring(
                        6,
                        10
                    )}`;
                }

                // Máscara para celular (xx) xxxxx-xxxx
                if (text.length === 11) {
                    text = `(${text.substring(0, 2)}) ${text.substring(2, 1)} ${text.substring(
                        3,
                        7
                    )}-${text.substring(7, 11)}`;
                }
                break;

            case 'cnpj':
                if (text.length <= 2) {
                    text;
                } else if (text.length > 2 && text.length <= 5) {
                    text = `${text.substring(0, 2)}.${text.substring(2, 5)}`;
                } else if (text.length > 5 && text.length <= 8) {
                    text = `${text.substring(0, 2)}.${text.substring(2, 5)}.${text.substring(
                        5,
                        8
                    )}`;
                } else if (text.length > 8 && text.length <= 12) {
                    text = `${text.substring(0, 2)}.${text.substring(2, 5)}.${text.substring(
                        5,
                        8
                    )}/${text.substring(8, 12)}`;
                } else if (text.length > 12 && text.length <= 14) {
                    text = `${text.substring(0, 2)}.${text.substring(2, 5)}.${text.substring(
                        5,
                        8
                    )}/${text.substring(8, 12)}-${text.substring(12, 14)}`;
                } else {
                    text = `${text.substring(0, 2)}.${text.substring(2, 5)}.${text.substring(
                        5,
                        8
                    )}/${text.substring(8, 12)}-${text.substring(12, 14)}`;
                }
                break;

            case 'cpf':
                if (text.length <= 3) {
                    text;
                } else if (text.length > 3 && text.length <= 6) {
                    text = `${text.substring(0, 3)}.${text.substring(3, 6)}`;
                } else if (text.length > 6 && text.length <= 9) {
                    text = `${text.substring(0, 3)}.${text.substring(3, 6)}.${text.substring(
                        6,
                        9
                    )}`;
                } else if (text.length > 9 && text.length <= 11) {
                    text = `${text.substring(0, 3)}.${text.substring(3, 6)}.${text.substring(
                        6,
                        9
                    )}-${text.substring(9, 11)}`;
                } else {
                    text = `${text.substring(0, 3)}.${text.substring(3, 6)}.${text.substring(
                        6,
                        9
                    )}-${text.substring(9, 11)}`;
                }

                break;
            case 'data':
                if (text.length <= 2) {
                    text;
                } else if (text.length > 2 && text.length <= 4) {
                    text = `${text.substring(0, 2)}/${text.substring(2, 4)}`;
                } else if (text.length > 4 && text.length <= 8) {
                    text = `${text.substring(0, 2)}/${text.substring(2, 4)}/${text.substring(
                        4,
                        8
                    )}`;
                } else {
                    text = `${text.substring(0, 2)}/${text.substring(2, 4)}/${text.substring(
                        4,
                        8
                    )}`;
                }
                break;
            case 'cep':
                if (text.length <= 5) {
                    text;
                } else {
                    text = `${text.substring(0, 5)}-${text.substring(5, 8)}`;
                }
                break;
            default:
                text;
                break;
        }

        return text;
    } else {
        return text;
    }
};
