import { useState } from "react";
import Modal from "../../Components/Modals/Modal";
import { StyledDefaultView, StyledErroText, StyledInputDefault, StyledLinkBtn, StyledTextDefault, StyledTitleText, StyledViewForm } from "../../Components/Styles/Styles";
import { Button } from 'react-native';
import { cadastraUsuario } from "../../Components/BancoDados/Banco_Dados";

export default ({navigation}) => {
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
        if(validacaoFinal){
            MudarModal();
            cadastraUsuario(User.nome, User.email, User.senha);
        }
        //setValidar({...Validar, ['csenha']: validacaoFinal ? "Deu certooo" : "n foi"});
    }
    const MudarModal = () => {
        toggleModall(!visivela);
    }

    return(
        <StyledViewForm>
            <Modal visivel={visivela} toggleModal={MudarModal} msg={"Cadastrado com sucesso!"} />
            <StyledTitleText>Cadastro</StyledTitleText>
            <StyledTextDefault>Digite seu nome:</StyledTextDefault>
            <StyledInputDefault placeholder="Nome" onChangeText={(valorT) => {setUser({ ...User, nome: valorT }); validar('nome', valorT);}} />
            <StyledErroText>{Validar.nome}</StyledErroText>
            <StyledTextDefault>Digite seu email</StyledTextDefault>
            <StyledInputDefault placeholder="Email" onChangeText={(valorT) => {SetDatas('email', valorT); validar('email', valorT);}} />
            <StyledErroText>{Validar.email}</StyledErroText>
            <StyledTextDefault>Digite sua senha:</StyledTextDefault>
            <StyledInputDefault placeholder="Senha" secureTextEntry={true} onChangeText={(valorT) => {SetDatas('senha', valorT); validar('senha', valorT);}} />
            <StyledErroText>{Validar.senha}</StyledErroText>
            <StyledTextDefault>Repita a senha:</StyledTextDefault>
            <StyledInputDefault placeholder="Confirmar senha" secureTextEntry={true} onChangeText={(valorT) => {SetDatas('csenha', valorT); validar('csenha', valorT);}} />
            <StyledErroText>{Validar.csenha}</StyledErroText>
            <StyledLinkBtn onPress={() => navigation.navigate('Login')}>Já tenho uma conta</StyledLinkBtn>
            <Button title="Cadastrar" onPress={btn} />
        </StyledViewForm>
    );
}