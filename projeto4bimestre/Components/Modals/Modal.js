import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
    background-color: white;
    justify-content: center;
    /* align-items: center; */
    height: 150px;
    border-radius: 10px;
`;
const StyledText = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 20px;
`;

export default ({visivel, toggleModal}) => {
    //style={{ justifyContent: 'center', alignItems: 'center' }}
    return(
        <Modal isVisible={visivel}>
            <StyledView>
            <StyledText>Cadastrado com sucesso!</StyledText>
            <Button title="Fechar" onPress={toggleModal} />
            </StyledView>
        </Modal>
    )
}