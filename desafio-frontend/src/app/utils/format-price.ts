export function formatarValorReais(valorCentavos: number) {
        const valorReais = valorCentavos / 100;
        return valorReais.toLocaleString('pt-BR' , {style: 'currency' , currency: 'BRL'})
    }