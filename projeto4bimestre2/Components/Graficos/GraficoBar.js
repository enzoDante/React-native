import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from "victory-native";
import { StyledBarsGrapView, StyledBarsView, StyledTitleText, StyledDatePickerView } from "../Styles/Styles";
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState } from "react";

export default ({cafeDatas, almocoDatas, lancheDatas, jantaDatas, colors, textlabel, dataPesquisa, dadosOrganizados}) => {
    const [cafe, setCafe] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });
    const [almoco, setAlmoco] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });
    const [lanche, setLanche] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });
    const [janta, setJanta] = useState({ calorias: 0, quantidade: 0, media: 0, porcentagem: 0 });

    const [selectedLanguage, setSelectedLanguage] = useState();

    const dadosChaves = dadosOrganizados ? Object.keys(dadosOrganizados) : [];


    const alterouData = (dataSelect) => {

        // Calcular as calorias e quantidade para cada tipo
        const cafeDados = calcularCaloriasEQuantidadePorTipo(dadosOrganizados[dataSelect], "cafe");
        const almocoDados = calcularCaloriasEQuantidadePorTipo(dadosOrganizados[dataSelect], "almoco");
        const lancheDados = calcularCaloriasEQuantidadePorTipo(dadosOrganizados[dataSelect], "lanche");
        const jantaDados = calcularCaloriasEQuantidadePorTipo(dadosOrganizados[dataSelect], "janta");
        setCafe(cafeDados);
        setAlmoco(almocoDados);
        setLanche(lancheDados);
        setJanta(jantaDados);
    }
    const calcularCaloriasEQuantidadePorTipo = (dataselected, tipo) => {
        let totalCalorias = 0;
        let totalQuantidade = 0;
        let mediaa = 0;
        
        //dietaState
        if(dataselected[tipo]){
            dataselected[tipo].forEach((refeicao) => {
                if (refeicao["calorias"]) {
                    totalCalorias += parseFloat(refeicao.calorias);
                    totalQuantidade += 1; // Incrementa a quantidade para cada alimento
                }
                
            });
            mediaa = totalQuantidade != 0 ? (totalCalorias / totalQuantidade).toFixed(2) : 0;
        }
        return { calorias: totalCalorias, quantidade: totalQuantidade, media: mediaa, porcentagem: 0 };
    };

    return(
        <StyledBarsView  style={dataPesquisa == "diaEspecifico" ? {height: 300} : null} >
            <StyledTitleText>{textlabel}</StyledTitleText>
            {dataPesquisa == "diaEspecifico" ? (
                <StyledDatePickerView>
                    <Picker
                        style={{width: 250}}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>{ alterouData(itemValue); setSelectedLanguage(itemValue); }
                    }>
                        <Picker.Item label="Selecione uma data" value="" />
                            {dadosChaves.map((item, index) => (
                                <Picker.Item key={index} label={item} value={item} />)
                            )}
                    </Picker>
                </StyledDatePickerView>
            ) : null}
            <StyledBarsGrapView>
                <VictoryChart theme={VictoryTheme.material} domainPadding={20} height={250} width={350} >
                    <VictoryStack colorScale={colors} >
                        <VictoryBar barRatio={0.7} data={[{ x: 'cafe', y: (cafeDatas != null ? parseFloat(cafeDatas) : parseFloat(cafe.media)) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Almoço', y: (cafeDatas != null ? parseFloat(almocoDatas) : parseFloat(almoco.media) ) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Lanche', y: (cafeDatas != null ? parseFloat(lancheDatas) : parseFloat(lanche.media)   ) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Janta', y: ( cafeDatas != null ? parseFloat(jantaDatas) : parseFloat(janta.media)  ) }]}/>
                    </VictoryStack>
                </VictoryChart>
            </StyledBarsGrapView>

        </StyledBarsView>

    )
};

const mediadoDia = () => {

}

// export default ({cafeDatas, almocoDatas, lancheDatas, jantaDatas, colors, textlabel}) => {
//     const datas = [
//         {x: 'cafe', y: parseFloat(cafeDatas)},
//         {x: 'almoço', y: parseFloat(almocoDatas)},
//         {x: 'lanche', y: parseFloat(lancheDatas)},
//         {x: 'janta', y: parseFloat(jantaDatas)}
//     ]

//     return(
//         <StyledBarsView>
//             <StyledTitleText>{textlabel}</StyledTitleText>
//             <StyledBarsGrapView>
//                 <VictoryChart theme={VictoryTheme.material} domainPadding={20} height={250} width={350} >

//                     <VictoryBar 
//                         barRatio={0.7} 
//                         data={datas} 
//                     />

//                 </VictoryChart>
//             </StyledBarsGrapView>
//         </StyledBarsView>
//     )
// }