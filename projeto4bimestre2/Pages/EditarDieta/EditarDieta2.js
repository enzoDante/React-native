import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useRoute } from "@react-navigation/native";

export default () => {
    const route = useRoute();
  const { item } = route.params;
  const [dieta, setDieta] = useState(item.Dieta);

  const adicionarRefeicao = (refeicaoType) => {
    const novaRefeicao = { id: dieta.length, refeicao: '', calorias: 0 };
    setDieta([...dieta, { [refeicaoType]: [novaRefeicao] }]);
  };

  const removerRefeicao = (refeicaoType, id) => {
    const novaDieta = dieta.map((refeicao) => {
      if (refeicao[refeicaoType]) {
        const novasRefeicoes = refeicao[refeicaoType].filter((item) => item.id !== id);
        return { ...refeicao, [refeicaoType]: novasRefeicoes };
      }
      return refeicao;
    });
    setDieta(novaDieta);
  };

  const handleChange = (refeicaoType, id, field, value) => {
    const novaDieta = dieta.map((refeicao) => {
      if (refeicao[refeicaoType]) {
        const novasRefeicoes = refeicao[refeicaoType].map((item) => {
          if (item.id === id) {
            return { ...item, [field]: value };
          }
          return item;
        });
        return { ...refeicao, [refeicaoType]: novasRefeicoes };
      }
      return refeicao;
    });
    setDieta(novaDieta);
  };

  return (
    <View>
      {/* Renderizar Inputs para cada refeição */}
      {dieta.map((refeicao) =>
        Object.keys(refeicao).map((refeicaoType) =>
          refeicao[refeicaoType].map((item) => (
            <View key={item.id}>
              <TextInput
                value={item.refeicao}
                onChangeText={(text) => handleChange(refeicaoType, item.id, 'refeicao', text)}
              />
              <TextInput
                value={item.calorias.toString()}
                onChangeText={(text) => handleChange(refeicaoType, item.id, 'calorias', parseInt(text))}
              />
              <Button onPress={() => removerRefeicao(refeicaoType, item.id)} title="Remover" />
            </View>
          ))
        )
      )}
      {/* Botões para adicionar novas refeições */}
      <Button onPress={() => adicionarRefeicao('cafe')} title="Adicionar Café" />
      <Button onPress={() => adicionarRefeicao('almoco')} title="Adicionar Almoço" />
      {/* ... Outros botões para adicionar outras refeições */}
    </View>
  );
}