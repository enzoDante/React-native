import { VictoryPie } from "victory-native";
import { StyledColoredT, StyledPieDataView, StyledPieTittleDatasView, StyledPieView, StyledTextDefault, StyledTextWDataView, StyledTitleText } from "../Styles/Styles";
import { useEffect, useState } from "react";

const calcularPorcc = (cafeMedia, almocoMedia, lancheMedia, jantaMedia) => {
    let total = parseFloat(cafeMedia) + parseFloat(almocoMedia) + parseFloat(lancheMedia) + parseFloat(jantaMedia);
    const CafePorc = ((parseFloat(cafeMedia) / total) * 100).toFixed(1);
    const AlmocoPorc = ((parseFloat(almocoMedia) / total) * 100).toFixed(1);
    const LanchePorc = ((parseFloat(lancheMedia) / total) * 100).toFixed(1);
    const JantaPorc = ((parseFloat(jantaMedia) / total) * 100).toFixed(1);

    return  [CafePorc, AlmocoPorc, LanchePorc, JantaPorc];
};

export default ({cafeDatas, almocoDatas, lancheDatas, jantaDatas, colors, deveCalcularOq, textlabel}) => {
    const [execucoes, setExecucoes] = useState(0);

    const [porcs, setPorcs] = useState([0, 0, 0, 0]);
    useEffect(() => {        
        if(deveCalcularOq == 'media')
            setPorcs(calcularPorcc(cafeDatas.media, almocoDatas.media, lancheDatas.media, jantaDatas.media));

        if(execucoes < 1)
            setExecucoes((prevExecucoes) => prevExecucoes + 1);
    }, [execucoes]);

    const data = [
        { x: 'cafe', y: parseFloat(porcs[0]) },
        { x: 'almoco', y: parseFloat(porcs[1]) },
        { x: 'lanche', y: parseFloat(porcs[2]) },
        { x: 'janta', y: parseFloat(porcs[3]) },
    ];

    return (
        <StyledPieTittleDatasView>
            <StyledTitleText>{textlabel}</StyledTitleText>
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
                    colorScale={colors}
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
        </StyledPieTittleDatasView>
    );

}