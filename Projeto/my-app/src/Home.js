import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Home({ mudarNomeJogadores, changeScreen }) {
    const [player1, setPlayer1] = useState("");
    const [player2, setPlayer2] = useState("");

    const handleClick = (event) => {
        if (mudarNomeJogadores) {
            mudarNomeJogadores(player1, player2)
            changeScreen("Jogo")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Player 1" values={player1} onChangeText={setPlayer1} />
            <Text>O nome do Player 1 é: {player1}</Text>

            <TextInput placeholder="Player 2" values={player2} onChangeText={setPlayer2} />
            <Text>O nome do Player 2 é: {player2}</Text>

            <Button title="Jogar" onPress={handleClick} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: "80%",
        height: 20,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1
    }
});