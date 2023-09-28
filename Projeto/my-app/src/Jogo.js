import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Jogo(props) {
    const [b1, setB1] = useState("")
    const [b2, setB2] = useState("")
    const [b3, setB3] = useState("")
    const [b4, setB4] = useState("")
    const [b5, setB5] = useState("")
    const [b6, setB6] = useState("")
    const [b7, setB7] = useState("")
    const [b8, setB8] = useState("")
    const [b9, setB9] = useState("")

    const handleClick = (event) => {
        props.changeScreen("Home")

    }
    const handleClickb1 = (event) => {
        setB1("x");
    }

    const handleClickb2 = (event) => {
        setB2("x");
    }

    const handleClickb3 = (event) => {
        setB3("x");
    }

    const handleClickb4 = (event) => {
        setB4("x");
    }

    const handleClickb5 = (event) => {
        setB5("x");
    }

    const handleClickb6 = (event) => {
        setB6("x");
    }

    const handleClickb7 = (event) => {
        setB7("x");
    }

    const handleClickb8 = (event) => {
        setB8("x");
    }

    const handleClickb9 = (event) => {
        setB9("x");
    }
    return (
        < View style={styles.Button}>
            < Text >
                Jogo
            </Text >

            <Button title={b1} onPress={handleClickb1} />
            <Button title={b2} onPress={handleClickb2} />
            <Button title={b3} onPress={handleClickb3} />
            <Button title={b4} onPress={handleClickb4} />
            <Button title={b5} onPress={handleClickb5} />
            <Button title={b6} onPress={handleClickb6} />
            <Button title={b7} onPress={handleClickb7} />
            <Button title={b8} onPress={handleClickb8} />
            <Button title={b9} onPress={handleClickb9} />
            <Button title="Voltar" onPress={handleClick} />
        </View >
    )
}

const styles = StyleSheet.create({
    Button: {
        flexDirection: 'row',
        backgroundColor: '#fff',
    }
});