import { useState } from "react";
import Modal from "../../Components/Modals/Modal";
import { StyledErroText, StyledInputDefault, StyledLinkBtn, StyledTextDefault, StyledTitleText, StyledViewForm } from "../../Components/Styles/Styles";
import { Button } from 'react-native';

export default ({navigation}) => {
    const [User, setUser] = useState({'nome': "", "senha": ""});
    const [Validar, setValidar] = useState({'nome': "", 'senha': ''});

    const SetDatas = (key, value) => {
        setUser({...User, [key]: value});
    }

    const validar = (key, e) => {
        if(key == 'nome'){
            if(e.length < 5)
                setValidar({...Validar, [key]: "Nome muito curto"});
            else
                setValidar({...Validar, [key]: ""})
        }        
        else if(key != 'senha'){
            if(User.nome == "" || Validar.nome != ""){
                setValidar({...Validar, ['nome']: "Nome incorreto"});
                return false;
            }
            if(User.senha == "" || Validar.senha != ""){
                setValidar({...Validar, ['senha']: "Senha incorreta"});
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
            navigation.navigate('Cadastro');
            //cadastrar banco de dados!
        }

        //setValidar({...Validar, ['csenha']: validacaoFinal ? "Deu certooo" : "n foi"});
    }
    const MudarModal = () => {
        toggleModall(!visivela);
    }

    return(
        <StyledViewForm>
            <Modal visivel={visivela} toggleModal={MudarModal} msg={"Logado!"}/>

            <StyledTitleText>Login</StyledTitleText>

            <StyledTextDefault>Digite seu nome:</StyledTextDefault>
            <StyledInputDefault placeholder="Nome" onChangeText={(valorT) => {setUser({ ...User, nome: valorT }); validar('nome', valorT);}} />
            <StyledErroText>{Validar.nome}</StyledErroText>

            <StyledTextDefault>Digite sua senha:</StyledTextDefault>
            <StyledInputDefault placeholder="Senha" secureTextEntry={true} onChangeText={(valorT) => {SetDatas('senha', valorT); validar('senha', valorT);}} />
            <StyledErroText>{Validar.senha}</StyledErroText>


            <StyledLinkBtn onPress={() => navigation.navigate('Cadastro')} >Não possuo uma conta</StyledLinkBtn>
            <Button title="Logar" onPress={btn} />

        </StyledViewForm>
    );
}