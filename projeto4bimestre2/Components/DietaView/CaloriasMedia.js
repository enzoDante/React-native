
export const CalcMedia = (element) => {
    let soma = 0, total = 0;
    let valores = [];
    
    element.forEach(e => {
        valores.push(parseFloat(e.calorias).toFixed(2));
        total++;
        soma += parseFloat(e.calorias);
    });
    const media = soma / total;

    return (`${media.toFixed(2)}\nDesvio padrão: ${calcDesvP(valores, total, media.toFixed(2)).toFixed(2)}`);
}

export const CalcAllMedia = (ArrayValues, total) => {

}

const calcDesvP = (valsArray, total, media) => {
    let soma = 0;
    valsArray.forEach((e) => {
        const diferenca = Math.pow(e - media, 2);
        soma += diferenca;
    })
    
    return (Math.sqrt(soma/total));


}

