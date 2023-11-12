import { useDispatch } from "react-redux";
import { addDieta } from "../ReduxConfig/Reducers";

// const fs = require('fs');
const DataAtual = () => {
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês começa do zero
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
};
const Salvar = (desc, cafe, almoco, lanche, janta) => {
    const dispatch = useDispatch();
    const hoje = DataAtual();
    // console.log(desc);
    // console.log(cafe);
    // console.log(almoco);.
    // console.log(lanche);
    // console.log(janta);

    const data = {"dataCriacao": hoje, "Dieta": [
        desc,
        {"cafe:": cafe},
        {"almoco:": almoco},
        {"lanche:": lanche},
        {"janta:": janta},
    ]};
    const dataString = JSON.stringify(data);
    dispatch(addDieta(dataString));

    console.log(dataString);
    console.log("aaa");

};

export {DataAtual, Salvar};

/**
 * [{"dataCriacao": "10/10/2023", "Dieta": [
        "descricao aqui teste 2222",
        {"cafe:": [{"refeicao": "pão", "calorias": 30}, {"refeicao": "suco de laranja", "calorias": 10},]},
        {"almoco:": [{"refeicao": "macarrão", "calorias": 50}, {"refeicao": "assinha de frango", "calorias": 150},]},
        {"lanche:": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta:": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},]
 */