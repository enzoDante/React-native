import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from "@supabase/supabase-js";


const PROJECT_URL = "https://imhkplureglhcbjhtlue.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImltaGtwbHVyZWdsaGNiamh0bHVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NTIwMDcsImV4cCI6MjAxNTEyODAwN30.ipq9_fVYAAOpdGRwLhZm1Fr5rz_891ri8Xtguo-8CdM";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
      },
});

const cadastraUsuario = (nome, email, senha) => {
    supabase.from("usuario").insert({
        nome: nome,
        email: email,
        senha: senha,
    }).then((e) => {
        console.log("teste");
    }).catch((erro) => {
        console.log("errooo");
    });
}

let usuarioLogado = {"id": "", "nome": "", "email": ""};
const Logiousuario = (nom, sen) => {
    // let {data: usuario, erro} = supabase.from("usuario").select("*").match({nome: nom, senha: sen});
    supabase.from("usuario").select("*").match({nome: nom, senha: sen}).then((e) => {
        // usuarioLogado = {"id": e.data.id, "nome": e.data.nome, "email": e.data.email};
        let a = [];
        e.data.forEach((dados) => {
            a.push(dados);
            usuarioLogado = {"id": dados.id, "nome": dados.nome, "email": dados.email};
        });
        console.log(usuarioLogado.nome.length);
        if(a.length == 0)
            usuarioLogado = {"id": "", "nome": "", "email": ""};

    });
}
//======================================
const DataAtual = () => {
    const dataAtual = new Date();

    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // O mês começa do zero
    const ano = dataAtual.getFullYear();

    return `${dia}/${mes}/${ano}`;
};
const cadastrarDieta = (dadosDieta, cafeDados, almocoDados, lancheDados, jantaDados) => {
    const dia = DataAtual();
    const teste = [{"cafe": cafeDados}, {"almoco" : almocoDados}, {"lanche" : lancheDados}, {"janta" : jantaDados}];
    supabase.from("dietap").insert({
        created_at: dia,
        desc: dadosDieta,
    }).then((e) => {
        console.log("teste111");
        console.log(e);
    }).catch((erro) => {
        console.log("errooo1111");
    });

    supabase.from("dietap").select("id").match({desc: dadosDieta}).then((e) => {
        // usuarioLogado = {"id": e.data.id, "nome": e.data.nome, "email": e.data.email};
        let id = 0;
        e.data.forEach((dados) => {
            id = dados.id;
        });
        if(id != 0 && id != null){
            //if(cafeDados.length != 0)
            supabase.from("refeicoes").insert({
                idDieta: id,
                refeicao: teste,
            }).then((e) => {
                console.log("cafe deu certo");
            }).catch((erro) => {
                console.log("cafe deu errado");
            });
        }
    });

    return true;
};

const returnDados = () => {
    supabase.from("dietap").select('*').then((e) => {
        e.data.forEach((dados) => {
            console.log(dados);
        })
    })
}

export {cadastraUsuario, Logiousuario, usuarioLogado, cadastrarDieta, returnDados};