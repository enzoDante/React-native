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
const StyledViewWBtns = styled.View`
    flex-direction: row;
    padding: 5px;
    padding-left: 10px;
    padding-right: 25px;
    /* margin: 5px; */
    margin-top: 10px;
    /* justify-content: center; */
    /* justify-content: space-around; */
    align-items: center;
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
const StyledPieView = styled.View`
flex-direction: row;
    background-color: white;
    border-radius: 10px;
    margin-top: 5px;
    height: 250px;
    /* justify-content: space-around; */
`;
const StyledBarsView = styled.View`
    background-color: white;
    border-radius: 10px;
    margin-top: 15px;
    height: 260px;
    /* padding-top: -50px; */
    /* justify-content: space-around; */
`;
const StyledPieDataView = styled.View`
    /* background-color: red; */
    padding: 15px;
    width: 150px;
    margin-right: -80px;
    align-self: center;

`;
const StyledTextWDataView = styled.View`
    flex-direction: row;
    align-items: center;
`;
const StyledColoredT = styled.Text`
    width: 30px;
    height: 30px;
    border-radius: 5px;
    background-color: black;
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
    /* margin-left: -100px; */
    width: 60px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: #5182F5;
`;
const StyledTBtn2 = styled.TouchableOpacity`
    display: block;
    /* padding: 10px; */
    height: 60px;
    margin-bottom: 15px;
    margin-left: 20px;
    width: 60px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: #5182F5;
`;
const StyledImageIcon = styled.Image`
    height: 50px;
    width: 50px;    
`;
const StyledImageView = styled.View`
    background-color: white;
    align-items: center;
    width: 40px;
    border-radius: 5px;
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
const StyledTextDP = styled.Text`
    font-size: 15px;
    margin: 5px;
    padding: 5px;
    /* border-top-style: solid; */
    border-top-width: 2px;
    font-weight: 500;
`;

export {StyledTextDefault,StyledImageView, StyledPieView, StyledBarsView, StyledPieDataView, StyledTextWDataView, StyledColoredT, StyledTextDefault2, StyledTextWBtn, StyledImageIcon, StyledViewWBtns, StyledTextTittle, StyledInputsWBtn, StyledTitleText, StyledErroText, StyledDefaultView, StyledViewForm, StyledViewDefault, StyledViewItems, StyledScroolView, StyledInputDefault, StyledInputInline, StyledInputNumber, StyledLinkBtn, StyledFixedBtn, StyledTextCreate, StyledTBtnInline, StyledPlus2, StyledMinus, StyledTBtn, StyledTBtn2, Styledplus, StyledExpandView, StyledTextExpendV, StyledViewRefeicoes, StyledTextDP};