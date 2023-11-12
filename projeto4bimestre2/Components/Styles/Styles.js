import styled from "styled-components/native";

const StyledTextDefault = styled.Text`
    font-size: 15px;
    margin: 5px;
`;
const StyledTextWBtn = styled.View`
    flex-direction: row;
    padding: 5px;
    padding-left: 10px;
    padding-right: 25px;
    /* margin: 5px; */
    margin-top: 10px;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: center;
    background-color: #BEE7FF;
    /* align-self: center; */    
    color: white;
`;
const StyledTextTittle = styled.Text`
    font-size: 17px;
    margin-bottom: 7px;
    font-weight: bold;

`;
const StyledTextDefault2 = styled.Text`
    font-size: 15px;
    font-weight: 600;

`;

const StyledInputsWBtn = styled.View`
    flex-direction: row;
    padding: 5px;
    padding-left: 10px;
    padding-right: 25px;
    margin-top: 10px;
    /* justify-content: center; */
    justify-content: space-between;
    align-items: center;
    background-color: #BEE7FF;
    /* align-self: center; */    
    color: white;
`;
const StyledTitleText = styled.Text`
    font-size: 20px;
    text-align: center;
`
const StyledErroText = styled.Text`
    color: red;
    margin-left: 25px;
    font-size: 15px;
    margin-bottom: 15px;
`
const StyledDefaultView = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;
const StyledViewForm = styled.View`
    /* flex: 1; */
    width: 100%;
    height: 100%;
    padding-top: 15px;
    background-color: #83AEE69C;
    /* align-items: center; */
    justify-content: center;
`
const StyledViewDefault = styled.View`
    width: 100%;
    justify-content: center;
    padding: 10px;
`;
const StyledViewItems = styled.View`
    width: 100%;
    justify-content: center;
    /* margin-top: 30px; */
    margin-bottom: 10px;
    background-color: #64CFFF40;
    padding: 30px;
    border-radius: 5px;
`;
const StyledViewRefeicoes = styled.View`
    margin-bottom: 5px;
    padding: 10px;
    /* box-shadow: 10px 5px 5px black; */
    border-radius: 5px;

    border-top-style: solid;
    border-top-width: 1px;
    border-left-style: solid;
    border-left-width: 1px;

    border-bottom-style: solid;
    border-bottom-width: 4px;
    border-right-style: solid;
    border-right-width: 4px;
    border-color: #0000005E;
    /* 7A */
    background-color: white;
`;

const StyledScroolView = styled.ScrollView`
    margin-bottom: 40px;
`;

const StyledInputDefault = styled.TextInput`
    background-color: white;
    margin: auto;
    /* margin-bottom: 15px; */
    padding: 7px;
    font-size: 15px;
    width: 350px;
    border-radius: 5px;

`
const StyledInputInline = styled.TextInput`
    background-color: white;
    width: 250px;
    margin: 5px;
    margin-left: -5px;
    margin-right: 0px;
    padding: 7px;
    font-size: 12px;
    border-radius: 5px;
    border-bottom-width: 1px;
    border-bottom-color: gray;
`;
const StyledInputNumber = styled.TextInput`
    background-color: white;
    margin: 5px;
    width: 50px;
    padding: 7px;
    font-size: 12px;
    border-radius: 5px;
    border-bottom-width: 1px;
    border-bottom-color: gray;
`;

const StyledLinkBtn = styled.Text`
    font-weight: bold;
    font-size: 15px;
    margin: 10px;
    padding: 5px;
    text-decoration: underline;
`;
const StyledFixedBtn = styled.TouchableOpacity`
    position: absolute;
    height: 60px;
    width: 60px;

    bottom: 5px;
    /* right: 5px; */
    left: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: #5CA8F5;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 15px;
`;
const StyledTextCreate = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 15px;
    margin: 5px;

`;
const StyledTBtnInline = styled.TouchableOpacity`
    display: inline-block;
    /* padding: 10px; */
    height: 50px;
    width: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    /* background-color: #5182F5; */
    background-color: #5CA8F5;
`;
const StyledPlus2 = styled.Text`
    font-size: 50px;
    margin-top: -15px;
    color: white;
    text-align: center;

`;
const StyledMinus = styled.Text`
    font-size: 80px;
    margin-top: -40px;
    color: white;
    text-align: center;
    color: #5CA8F5;

`;
const StyledTBtn = styled.TouchableOpacity`
    display: block;
    /* padding: 10px; */
    height: 60px;
    margin-bottom: 15px;
    width: 60px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: #5182F5;
`;
const Styledplus = styled.Text`
    font-size: 50px;
    margin-top: -10px;
    color: white;
    /* display: block; */
    /* justify-content: center;
    align-items: center; */
    text-align: center;
    /* margin: auto; */

`;
const StyledExpandView = styled.TouchableOpacity`
    display: block;
    /* padding: 10px; */
    margin: -30px -30px 0px -30px;
    height: 40px;
    /* width: 100%; */
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    background-color: #5182F5;

`;
const StyledTextExpendV = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 15px;
    text-decoration: underline;
`;

export {StyledTextDefault, StyledTextDefault2, StyledTextWBtn, StyledTextTittle, StyledInputsWBtn, StyledTitleText, StyledErroText, StyledDefaultView, StyledViewForm, StyledViewDefault, StyledViewItems, StyledScroolView, StyledInputDefault, StyledInputInline, StyledInputNumber, StyledLinkBtn, StyledFixedBtn, StyledTextCreate, StyledTBtnInline, StyledPlus2, StyledMinus, StyledTBtn, Styledplus, StyledExpandView, StyledTextExpendV, StyledViewRefeicoes};