import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Jogos(props) {

    const clicarVelha = () => {
        props.changeScreen("jogoDaVelha")
    }

    const clicarForca=()=>{
        props.changeScreen("jogoDaForca")
    }

    const clicarMemoria=()=>{
        props.changeScreen("jogoDaMemoria")
    }

    return (
        <View style={styles.tela}>
            <Button title='Jogo da Velha' onPress={clicarVelha} />
            <Button title='Jogo da Forca' onPress={clicarForca}/>
            <Button title='Jogo da Memória' onPress={clicarMemoria}/>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
