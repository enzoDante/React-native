import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import styled from "styled-components/native";
import Modal from '../Modal/Modal';

const FormularioCadastro = styled.View`
    /* flex: 1; */
    width: 100%;
    padding-top: 15px;
    background-color: #a0b0c0;
    /* align-items: center; */
    justify-content: center;
`
const StyledInput = styled.TextInput`
    background-color: white;
    margin: auto;
    /* margin-bottom: 15px; */
    padding: 7px;
    font-size: 15px;
    width: 350px;
    border-radius: 5px;

`
const StyledTitleText = styled.Text`
    font-size: 20px;
    text-align: center;
`
const StyledTextComum = styled.Text`
    margin: 5px;
    font-size: 15px;
`
const StyledErroText = styled.Text`
    color: red;
    margin-left: 25px;
    font-size: 15px;
    margin-bottom: 15px;
`

export default () => {
    const [User, setUser] = useState({'nome': "", "email": "", "senha": "", "csenha": ""});
    const [Validar, setValidar] = useState({'nome': "", 'email': '', 'senha': '', "csenha": ""});

    const SetDatas = (key, value) => {
        setUser({...User, [key]: value});
    }

    const validar = (key, e) => {
        if(key == 'nome'){
            if(e.length < 5)
                setValidar({...Validar, [key]: "Nome muito curto"});
            else
                setValidar({...Validar, [key]: ""})
        }else if(key == "email"){
            if(e.indexOf("@") < 0 || e.indexOf(".com") < 0 || e.indexOf("@.com") > 0)
                setValidar({...Validar, [key]: "Email inválido"});
            else
                setValidar({...Validar, [key]: ""});
        }else if(key == 'senha'){
            if(e.length < 4)
                setValidar({...Validar, [key]: "Senha muito curta"});
            else 
                setValidar({...Validar, [key]: ""});
        }else if(key == 'csenha'){
            if(e != User.senha)
                setValidar({...Validar, [key]: "Senha incorreta"});
            else
                setValidar({...Validar, [key]: ""});
        }else{
            if(User.nome == "" || Validar.nome != ""){
                setValidar({...Validar, ['nome']: "Nome incorreto"});
                return false;
            }
            if(User.email == "" || Validar.email != ""){
                setValidar({...Validar, ['email']: "Email incorreto"});
                return false;
            }
            if(User.senha == "" || Validar.senha != ""){
                setValidar({...Validar, ['senha']: "Senha incorreta"});
                return false;
            }
            if(User.csenha == "" || Validar.csenha != "" || User.csenha != User.senha){
                setValidar({...Validar, ['csenha']: "Confirmar senha incorreta"});
                return false;
            }
            return true;
        }
    }
    const [visivela, toggleModall] = useState(false);
    const btn = e => {
        let validacaoFinal = validar('cadastrar', '')
        if(validacaoFinal)
            MudarModal();
        //setValidar({...Validar, ['csenha']: validacaoFinal ? "Deu certooo" : "n foi"});
    }
    const MudarModal = () => {
        toggleModall(!visivela);
    }


    return(
        <FormularioCadastro>
            <Modal visivel={visivela} toggleModal={MudarModal}/>

            <StyledTitleText>Cadastro</StyledTitleText>
            <StyledTextComum>Digite seu nome: {User.nome}</StyledTextComum>
            <StyledInput placeholder="Nome" onChangeText={(valorT) => {setUser({ ...User, nome: valorT }); validar('nome', valorT);}} />
            <StyledErroText>{Validar.nome}</StyledErroText>
            
            <StyledTextComum>Digite seu email</StyledTextComum>
            <StyledInput placeholder="Email" onChangeText={(valorT) => {SetDatas('email', valorT); validar('email', valorT);}} />
            <StyledErroText>{Validar.email}</StyledErroText>

            <StyledTextComum>Digite sua senha:</StyledTextComum>
            <StyledInput placeholder="Senha" secureTextEntry={true} onChangeText={(valorT) => {SetDatas('senha', valorT); validar('senha', valorT);}} />
            <StyledErroText>{Validar.senha}</StyledErroText>

            <StyledTextComum>Repita a senha:</StyledTextComum>
            <StyledInput placeholder="Confirmar senha" secureTextEntry={true} onChangeText={(valorT) => {SetDatas('csenha', valorT); validar('csenha', valorT);}} />
            <StyledErroText>{Validar.csenha}</StyledErroText>

            <Button title="Cadastrar" onPress={btn} />

        </FormularioCadastro>
    );
}