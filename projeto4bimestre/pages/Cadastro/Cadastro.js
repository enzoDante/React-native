import Modal from "../../Components/Modals/Modal";
import { StyledErroText, StyledInputDefault, StyledTextDefault, StyledTitleText, StyledViewForm } from "../../Components/Styles/Styles";

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
        <StyledViewForm>
            <Modal visivel={visivela} toggleModal={MudarModal} />

            <StyledTitleText>Cadastro</StyledTitleText>

            <StyledTextDefault>Digite seu nome:</StyledTextDefault>
            <StyledInputDefault placeholder="Nome" onChangeText={(valorT) => {setUser({ ...User, nome: valorT }); validar('nome', valorT);}} />
            <StyledErroText>{Validar.nome}</StyledErroText>

            <StyledTitleText>Digite seu email</StyledTitleText>
            <StyledInputDefault placeholder="Email" onChangeText={(valorT) => {SetDatas('email', valorT); validar('email', valorT);}} />
            <StyledErroText>{Validar.email}</StyledErroText>

            <StyledTitleText>Digite sua senha:</StyledTitleText>
            <StyledInputDefault placeholder="Senha" secureTextEntry={true} onChangeText={(valorT) => {SetDatas('senha', valorT); validar('senha', valorT);}} />
            <StyledErroText>{Validar.senha}</StyledErroText>

            <StyledTitleText>Repita a senha:</StyledTitleText>
            <StyledInputDefault placeholder="Confirmar senha" secureTextEntry={true} onChangeText={(valorT) => {SetDatas('csenha', valorT); validar('csenha', valorT);}} />
            <StyledErroText>{Validar.csenha}</StyledErroText>

            <Button title="Cadastrar" onPress={btn} />

        </StyledViewForm>
    );
}