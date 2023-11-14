import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from "victory-native";
import { StyledBarsGrapView, StyledBarsView, StyledTitleText, StyledDatePickerView } from "../Styles/Styles";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";

export default ({cafeDatas, almocoDatas, lancheDatas, jantaDatas, colors, textlabel, dataPesquisa, dadosOrganizados}) => {
    
    const [selectedLanguage, setSelectedLanguage] = useState();



    return(
        <StyledBarsView >
            <StyledTitleText>{textlabel}</StyledTitleText>
            {dataPesquisa == "diaEspecifico" ? (
                <StyledDatePickerView>
                    <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                        <Picker.Item label="Selecione uma data" value="" />
                            {dadosOrganizados.map((item) => {
                                const teste = item.dataCriacao;
                                return(<Picker.Item label={teste} value={teste} />); //arrumarrrrrr
                            })}
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </StyledDatePickerView>
            ) : null}
            <StyledBarsGrapView>
                <VictoryChart theme={VictoryTheme.material} domainPadding={20} height={250} width={350} >
                    <VictoryStack colorScale={colors} >
                        <VictoryBar barRatio={0.7} data={[{ x: 'cafe', y: (cafeDatas != null ? parseFloat(cafeDatas) : 20) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Almoço', y: (cafeDatas != null ? parseFloat(almocoDatas) : 30 ) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Lanche', y: (cafeDatas != null ? parseFloat(lancheDatas) : 40   ) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Janta', y: ( cafeDatas != null ? parseFloat(jantaDatas) : 60  ) }]}/>
                    </VictoryStack>
                </VictoryChart>
            </StyledBarsGrapView>

        </StyledBarsView>

    )
};

const teste = () => {

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