import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [ player1, setPlayer1 ] = useState("");
  const [player2, setPlayer2]=useState("");

  const handleClick = (event) => {
    alert("Click")
  }

  return (
    <View style={styles.container}>
      <Text>Nome Player1: {player1}</Text>
      <TextInput
      placeholder="Player 1"
      style={styles.input}
      onChangeText={setPlayer1}></TextInput>

      <Text>Nome Player2: {player2}</Text>
      <TextInput
      placeholder="Player 2"
      style={styles.input}
      onChangeText={setPlayer2}></TextInput>
      
      <Button title="Botão" onPress={handleClick} />
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

const getArray(state){
  return {"Bruno", "Henrique"};
}
const array={"Bruno", "Henrique"};

const 
