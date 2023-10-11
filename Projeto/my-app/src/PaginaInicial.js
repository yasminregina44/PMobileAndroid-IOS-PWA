import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function PaginaInicial(props) {

    const clicar = () => {
        if (props.jogador1.length < 3) {
            alert("O nome do jogador 1 deve ter pelo menos 3 caracteres");
            return;
        }
        if (props.jogador2.length < 3) {
            alert("O nome do jogador 2 deve ter pelo menos 3 caracteres");
            return;
        }

            props.changeScreen("jogos")
        
    }

    return (
        <View style={styles.tela}>
            <Text>Digite o nome do 1º jogador:</Text>
            <TextInput placeholder='Jogador 1' value={props.jogador1} onChangeText={props.setJogador1}/>

            <Text>Digite o nome do 2º jogador:</Text>
            <TextInput placeholder='Jogador 2' value={props.jogador2} onChangeText={props.setJogador2}/>

            <Button title='Iniciar' onPress={clicar} />
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
