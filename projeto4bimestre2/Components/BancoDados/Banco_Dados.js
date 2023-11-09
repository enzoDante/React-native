import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from "@supabase/supabase-js";
import { useState } from 'react';

// const supabase = createClient('url:https://enzoDante.supabase.co', 'public-anon-key');
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


export {cadastraUsuario, Logiousuario, usuarioLogado};