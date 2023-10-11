import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PaginaInicial from './src/PaginaInicial';
import Jogos from './src/Jogos';
import JogoDaVelha from './src/JogoDaVelha';

export default function App() {
  const [screen, setScreen] = useState("paginaInicial");
  const [jogador1, setJogador1] = useState("");
  const [jogador2, setJogador2] = useState("");

  const checkScreen = (screenName) => screenName === screen;

  const setJogadores = (nome1, nome2) => {
    setJogador1(nome1);
    setJogador2(nome2);
  }

  const changeScreen = (newScreen) => setScreen(newScreen);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {checkScreen("paginaInicial") && (
        <PaginaInicial
          changeScreen={changeScreen}
          mudarNomeJogadores={setJogadores}
          setJogador1={setJogador1}
          setJogador2={setJogador2}
          jogador1={jogador1}
          jogador2={jogador2}
          />
      )}
      {checkScreen("jogos") && (
        <Jogos
          changeScreen={changeScreen}
        />
      )}
      {checkScreen("jogoDaVelha") && (
        <JogoDaVelha
          changeScreen={changeScreen}
          player1={jogador1}
          player2={jogador2}
        />
      )}
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
});
