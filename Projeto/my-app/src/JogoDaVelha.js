import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const startValues = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

export default function Jogo({
  changeScreen,
  player1,
  player2
}) {
  const [states, setStates] = useState(startValues);
  const [player, setPlayer] = useState("X");

  useEffect(() => {
    checkWin();
  }, [states])

  const goBack = () => {
    changeScreen("paginaInicial")
  }

  const checkPlayerWin = (player) => {
    // check lines
    for (let i = 0; i < 3; i++) {
      if (states[i][0] === player
        && states[i][1] === player
        && states[i][2] === player) {
        return true
      }
    }
    // check columns
    for (let i = 0; i < 3; i++) {
      if (states[0][i] === player
        && states[1][i] === player
        && states[2][i] === player) {
        return true
      }
    }

    // check others
    if (states[0][0] === player
      && states[1][1] === player
      && states[2][2] === player) {
      return true;
    }
    if (states[0][2] === player
      && states[1][1] === player
      && states[2][0] === player) {
      return true;
    }
  };

  const endPlay = (message) => {
    alert(message);
    setStates(startValues);
    goBack();
  }

  const checkWin = () => {
    if (checkPlayerWin("X")) {
      endPlay(`O jogador ${player1} venceu!`);
    } else if (checkPlayerWin("O")) {
      endPlay(`O jogador ${player2} venceu!`);
    } else {
      let countStates = 0;

      states.forEach(line => {
        line.forEach(column => {
          if (column === "X" || column === "O") countStates++;
        });
      });

      if (countStates === 9) {
        endPlay("Ninguém venceu!");
      }
    }
  }

  const handleClickPosition = (line, column) => {
    if (states[line][column] != "") {
      return;
    }

    const newState = [[...states[0]], [...states[1]], [...states[2]]]
    newState[line][column] = player;
    setStates(newState);
    setPlayer(player === "X" ? "O" : "X");
  }

  const getPlayerName = () => player === "X" ? player1 : player2;
  console.log("Olá")
  return (
    <View>
      <Button title="Voltar" onPress={goBack} />

      <Text>
        É a vez do jogador: {getPlayerName()} - {player}
      </Text>

      {
        states.map((line, indexLine) => {
          return (
            <View style={styles.line} key={indexLine}>
              {line.map((column, indexColumn) => (
                <TouchableOpacity
                  key={`${indexLine}${indexColumn}${column}`}
                  onPress={() => handleClickPosition(indexLine, indexColumn)}
                >
                  <View style={styles.buttonGame}>
                    <Text style={styles.buttonGameFont}>
                      {column}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  line: {
    display: "flex",
    flexDirection: "row"
  },
  buttonGame: {
    backgroundColor: 'red',
    width: 80,
    height: 80,
    margin: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonGameFont: {
    fontSize: 50,
    color: "#fff"
  }
});
