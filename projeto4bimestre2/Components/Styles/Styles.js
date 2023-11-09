import styled from "styled-components/native";

const StyledTextDefault = styled.Text`
    font-size: 15px;
    margin: 5px;
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
    padding-top: 15px;
    background-color: #a0b0c0;
    /* align-items: center; */
    justify-content: center;
`

const StyledInputDefault = styled.TextInput`
    background-color: white;
    margin: auto;
    /* margin-bottom: 15px; */
    padding: 7px;
    font-size: 15px;
    width: 350px;
    border-radius: 5px;

`

const StyledLinkBtn = styled.Text`
    font-weight: bold;
    font-size: 15px;
    margin: 10px;
    padding: 5px;
    text-decoration: underline;
`;

export {StyledTextDefault, StyledTitleText, StyledErroText, StyledDefaultView, StyledViewForm, StyledInputDefault, StyledLinkBtn};