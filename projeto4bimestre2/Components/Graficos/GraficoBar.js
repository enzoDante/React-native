import { VictoryBar, VictoryChart, VictoryStack, VictoryTheme } from "victory-native";
import { StyledBarsGrapView, StyledBarsView, StyledTitleText } from "../Styles/Styles";

export default ({cafeDatas, almocoDatas, lancheDatas, jantaDatas, colors, textlabel}) => 
    (
        <StyledBarsView >
            <StyledTitleText>{textlabel}</StyledTitleText>
            <StyledBarsGrapView>
                <VictoryChart theme={VictoryTheme.material} domainPadding={20} height={250} width={350} >
                    <VictoryStack colorScale={colors} >
                        <VictoryBar barRatio={0.7} data={[{ x: 'cafe', y: parseFloat(cafeDatas) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Almoço', y: parseFloat(almocoDatas) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Lanche', y: parseFloat(lancheDatas) }]} />
                        <VictoryBar barRatio={0.7} data={[{ x: 'Janta', y: parseFloat(jantaDatas) }]}/>
                    </VictoryStack>
                </VictoryChart>
            </StyledBarsGrapView>

        </StyledBarsView>

    );

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