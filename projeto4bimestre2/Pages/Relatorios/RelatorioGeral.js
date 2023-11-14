import { useDispatch, useSelector } from "react-redux";
import { StyledViewDefault, StyledPieView, StyledBarsView, StyledPieDataView, StyledTextWBtn, StyledTextWDataView, StyledTextDefault, StyledColoredT, StyledTitleText, StyledScroolView } from "../../Components/Styles/Styles";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { VictoryPie, VictoryChart, VictoryTooltip, VictoryBar, VictoryStack } from 'victory-native'
import GraficoPie from "../../Components/Graficos/GraficoPie";
import GraficoBar from "../../Components/Graficos/GraficoBar";

const dados = [
    {"dataCriacao": "10/10/2023", "Dieta": [
        "descricao aqui teste 2222",
        {"cafe": [{"refeicao": "pão", "calorias": 30}, {"refeicao": "suco de laranja", "calorias": 10},]},
        {"almoco": [{"refeicao": "macarrão", "calorias": 150}, {"refeicao": "assinha de frango", "calorias": 350},]},
        {"lanche": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
    {"dataCriacao": "13/10/2023", "Dieta": [
        {"cafe": [{"refeicao": "pão", "calorias": 20}, {"refeicao": "suco de laranja", "calorias": 50},]},
        {"almoco": [{"refeicao": "macarrão", "calorias": 50}, {"refeicao": "assinha de frango", "calorias": 150}, {"refeicao": "assinha de frango", "calorias": 369}]},
        {"lanche": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
    {"dataCriacao": "13/11/2023", "Dieta": [
        "descricao aqui teste 2222",
        {"cafe": [{"refeicao": "pão", "calorias": 60}]},
        {"almoco": [{"refeicao": "macarrão", "calorias": 270}, {"refeicao": "assinha de frango", "calorias": 3680},]},
        {"lanche": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
    {"dataCriacao": "13/11/2023", "Dieta": [
        "descricao aqui teste 2222",
        {"cafe": [{"refeicao": "pão", "calorias": 30}, {"refeicao": "suco de laranja", "calorias": 10},]},
        {"almoco": [{"refeicao": "macarrão", "calorias": 150}, {"refeicao": "assinha de frango", "calorias": 350},]},
        {"lanche": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
    {"dataCriacao": "14/11/2023", "Dieta": [
        {"cafe": [{"refeicao": "pão", "calorias": 20}, {"refeicao": "suco de laranja", "calorias": 50},]},
        {"almoco": [{"refeicao": "macarrão", "calorias": 50}, {"refeicao": "assinha de frango", "calorias": 150}, {"refeicao": "assinha de frango", "calorias": 369}]},
        {"lanche": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
    {"dataCriacao": "15/11/2023", "Dieta": [
        "descricao aqui teste 2222",
        {"cafe": [{"refeicao": "pão", "calorias": 60}]},
        {"almoco": [{"refeicao": "macarrão", "calorias": 270}, {"refeicao": "assinha de frango", "calorias": 80},]},
        {"lanche": [{"refeicao": "torta", "calorias": 30},{"refeicao": "maçã", "calorias": 20}, {"refeicao": "bolo", "calorias": 50},]},
        {"janta": [{"refeicao": "cachorro quente", "calorias": 150}, {"refeicao": "coca cola", "calorias": 300},]},
    ]},
];

export default () => {
    const dispatch = useDispatch();
    const dietaState = useSelector(state => state.dieta);

    const [Cafe, setCafe] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });
    const [Almoco, setAlmoco] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });
    const [Lanche, setLanche] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });
    const [Janta, setJanta] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });
    const [calorias, setCalorias] = useState([0, 0, 0, 0]);


    const [execucoes, setExecucoes] = useState(0);

    const [dadosOrganizadosData, setDadosOrgData] = useState({});
    
    useEffect(() => {
        // Função para calcular as calorias e quantidade de um tipo específico juntamente com sua média
        const calcularCaloriasEQuantidadePorTipo = (tipo) => {
            let totalCalorias = 0;
            let totalQuantidade = 0;
            //dietaState
            dietaState.forEach((item) => {
                if (item.Dieta) {
                    item.Dieta.forEach((refeicao) => {
                    if (refeicao[tipo]) {
                        refeicao[tipo].forEach((alimento) => {
                            totalCalorias += parseFloat(alimento.calorias);
                            totalQuantidade += 1; // Incrementa a quantidade para cada alimento
                        });
                    }
                    });
                }
            });
            let mediaa = totalQuantidade != 0 ? (totalCalorias / totalQuantidade).toFixed(2) : 0;
            return { calorias: totalCalorias, quantidade: totalQuantidade, media: mediaa, porcentagem: 0 };
        };
    
        // Calcular as calorias e quantidade para cada tipo
        const cafeDados = calcularCaloriasEQuantidadePorTipo("cafe");
        const almocoDados = calcularCaloriasEQuantidadePorTipo("almoco");
        const lancheDados = calcularCaloriasEQuantidadePorTipo("lanche");
        const jantaDados = calcularCaloriasEQuantidadePorTipo("janta");
        
        // Atualizar os estados com os totais
        setCafe(cafeDados);
        setAlmoco(almocoDados);
        setLanche(lancheDados);
        setJanta(jantaDados);
        setCalorias([cafeDados.calorias, almocoDados.calorias, lancheDados.calorias, jantaDados.calorias]);




        const organizarDadosPorDia = () => {
            const dadosOrganizados = {};
            dietaState.forEach(item => {
                const dataCriacao = item.dataCriacao;
                const dieta = item.Dieta;

                dieta.forEach(refeicao => {
                    if (typeof refeicao === 'object') {
                        const tipoRefeicao = Object.keys(refeicao)[0];
                        const detalhesRefeicao = refeicao[tipoRefeicao];
                
                        if (!dadosOrganizados[dataCriacao]) {
                        dadosOrganizados[dataCriacao] = {};
                        }
                
                        if (!dadosOrganizados[dataCriacao][tipoRefeicao]) {
                        dadosOrganizados[dataCriacao][tipoRefeicao] = [];
                        }
                
                        dadosOrganizados[dataCriacao][tipoRefeicao] = dadosOrganizados[dataCriacao][tipoRefeicao].concat(detalhesRefeicao);
                    }
                });
            });
            return (dadosOrganizados);
        };
        setDadosOrgData(organizarDadosPorDia());
        // console.log(dadosOrganizadosData);

        // organizarDadosPorDia();
        if(execucoes < 2)
            setExecucoes((prevExecucoes) => prevExecucoes + 1);
    }, [execucoes]);



    return(
        <StyledScroolView>
            <StyledViewDefault>
                {/* mostrar as médias das dietas e suas refeições */}
                {/* <Text>Café: {Cafe.calorias} calorias - {Cafe.quantidade} refeições  media {Cafe.media} </Text>
                <Text>Almoço: {Almoco.calorias} calorias - {Almoco.quantidade} refeições  media {Almoco.media}</Text>
                <Text>Lanche: {Lanche.calorias} calorias - {Lanche.quantidade} refeições  media {Lanche.media}</Text>
                <Text>Janta: {Janta.calorias} calorias - {Janta.quantidade} refeições  media {Janta.media}</Text> */}
                <GraficoPie cafeDatas={Cafe} almocoDatas={Almoco} lancheDatas={Lanche} jantaDatas={Janta} colors={["tomato", "orange", "gold", "cyan"]} deveCalcularOq={"media"} textlabel={"Porcentagem total das médias"} />
                <GraficoBar cafeDatas={Cafe.media} almocoDatas={Almoco.media} lancheDatas={Lanche.media} jantaDatas={Janta.media} colors={["tomato", "orange", "gold", "cyan" ]} textlabel={"Média total de refeições"} dataPesquisa={""} />
                <GraficoBar dadosOrganizados={dadosOrganizadosData} colors={["tomato", "orange", "gold", "cyan" ]} textlabel={"Média de refeições"} dataPesquisa={"diaEspecifico"} />
            </StyledViewDefault>
        </StyledScroolView>
    );
};