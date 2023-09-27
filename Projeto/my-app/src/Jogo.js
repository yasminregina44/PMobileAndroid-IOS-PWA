import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Jogo(props) {
    const [b1, setB1] = useState("")

    const handleClick = (event) => {
        props.changeScreen("Home")

    }
    const handleClickb1 = (event) => {
        setB1("x");

    }

    return (
        < View>
            < Text >
                Jogo
            </Text >

            <Button title={b1} onPress={handleClickb1}/>
            <Button title="Voltar" onPress={handleClick} />
        </View >
    )
}