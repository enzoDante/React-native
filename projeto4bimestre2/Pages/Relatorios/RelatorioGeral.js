import { useDispatch, useSelector } from "react-redux";
import { StyledViewDefault, StyledPieView, StyledBarsView, StyledPieDataView, StyledTextWBtn, StyledTextWDataView, StyledTextDefault, StyledColoredT, StyledTitleText } from "../../Components/Styles/Styles";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { VictoryPie, VictoryChart, VictoryTooltip, VictoryBar, VictoryStack } from 'victory-native'

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
    
    useEffect(() => {
        // Função para calcular as calorias e quantidade de um tipo específico
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

        if(execucoes < 1)
            setExecucoes((prevExecucoes) => prevExecucoes + 1);
    }, [execucoes]);



    return(
        <StyledViewDefault>
            {/* mostrar as médias das dietas e suas refeições */}
            {/* <Text>Café: {Cafe.calorias} calorias - {Cafe.quantidade} refeições  media {Cafe.media} </Text>
            <Text>Almoço: {Almoco.calorias} calorias - {Almoco.quantidade} refeições  media {Almoco.media}</Text>
            <Text>Lanche: {Lanche.calorias} calorias - {Lanche.quantidade} refeições  media {Lanche.media}</Text>
            <Text>Janta: {Janta.calorias} calorias - {Janta.quantidade} refeições  media {Janta.media}</Text> */}
            <StyledTitleText>Porcentagem de refeições</StyledTitleText>
            <GraficoPizza cafeDatas={Cafe} almocoDatas={Almoco} lancheDatas={Lanche} jantaDatas={Janta} />
            <StyledTitleText>Média de refeições</StyledTitleText>
            <GraficoBars cafeDatas={Cafe} almocoDatas={Almoco} lancheDatas={Lanche} jantaDatas={Janta} />
        </StyledViewDefault>
    );
};


const GraficoPizza = ({cafeDatas, almocoDatas, lancheDatas, jantaDatas}) => {
    const [execucoes, setExecucoes] = useState(0);

    const [porcs, setPorcs] = useState([0, 0, 0, 0]);
    useEffect(() => {
        const calcularPorc =  () => {
            let total = parseFloat(cafeDatas.media) + parseFloat(almocoDatas.media) + parseFloat(lancheDatas.media) + parseFloat(jantaDatas.media);
            const CafePorc = ((parseFloat(cafeDatas.media) / total) * 100).toFixed(1);
            const AlmocoPorc = ((parseFloat(almocoDatas.media) / total) * 100).toFixed(1);
            const LanchePorc = ((parseFloat(lancheDatas.media) / total) * 100).toFixed(1);
            const JantaPorc = ((parseFloat(jantaDatas.media) / total) * 100).toFixed(1);

            setPorcs([CafePorc, AlmocoPorc, LanchePorc, JantaPorc]); 
        };
        calcularPorc();

        if(execucoes < 1)
            setExecucoes((prevExecucoes) => prevExecucoes + 1);
    }, [execucoes]);
    const data = [
        { x: 'cafe', y: parseFloat(porcs[0]) },
        { x: 'almoco', y: parseFloat(porcs[1]) },
        { x: 'lanche', y: parseFloat(porcs[2]) },
        { x: 'janta', y: parseFloat(porcs[3]) },
    ];
    const colors = ["tomato", "orange", "gold", "cyan"];

    return (
        <StyledPieView>
            <StyledPieDataView>

                <StyledTextWDataView>
                    <StyledColoredT style={{backgroundColor: colors[0]}} />
                    <StyledTextDefault>Café: {porcs[0]}% </StyledTextDefault>
                </StyledTextWDataView>

                <StyledTextWDataView>
                    <StyledColoredT style={{backgroundColor: colors[1]}} />
                    <StyledTextDefault>Almoço: {porcs[1]}%</StyledTextDefault>
                </StyledTextWDataView>

                <StyledTextWDataView>
                    <StyledColoredT style={{backgroundColor: colors[2]}} />
                    <StyledTextDefault>Lanche: {porcs[2]}%</StyledTextDefault>
                </StyledTextWDataView>

                <StyledTextWDataView>
                    <StyledColoredT style={{backgroundColor: colors[3]}} />
                    <StyledTextDefault>Janta: {porcs[3]}%</StyledTextDefault>
                </StyledTextWDataView>

            </StyledPieDataView>
            <VictoryPie
                colorScale={["tomato", "orange", "gold", "cyan" ]}
                data={data}
                height={270}

                style={{
                    labels: {display: 'none'}
                }}
                // labelComponent={<VictoryTooltip renderInPortal={false}  style={{
                //     color: 'black'
                // }}
                // /> }

            />
        </StyledPieView>
    );

}

const GraficoBars = ({cafeDatas, almocoDatas, lancheDatas, jantaDatas}) => {

    // const data = [
    //     { x: 'cafe', y: 30, fill: 'tomato' },
    //     { x: 'almoco', y: 20, fill: 'orange' },
    //     { x: 'lanche', y: 30, fill: 'gold' },
    //     { x: 'janta', y: 50, fill: 'cyan' },
    // ];
    const colors = ["tomato", "orange", "gold", "cyan" ];

    return(
        <StyledBarsView >
            <VictoryChart domainPadding={15} height={280} >
                    <VictoryStack colorScale={colors} >
                        <VictoryBar data={[{ x: 'cafe', y: parseFloat(cafeDatas.media) }]} />
                        <VictoryBar data={[{ x: 'Almoço', y: parseFloat(almocoDatas.media) }]} />
                        <VictoryBar data={[{ x: 'Lanche', y: parseFloat(lancheDatas.media) }]} />
                        <VictoryBar data={[{ x: 'Janta', y: parseFloat(jantaDatas.media) }]}/>
                    </VictoryStack>
            </VictoryChart>

        </StyledBarsView>

    );
}