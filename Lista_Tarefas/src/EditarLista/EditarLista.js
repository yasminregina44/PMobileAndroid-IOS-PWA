import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';

export default function EditarLista({ navigation }) {

    const [nomeLista, setNomeLista] = useState("")

    const salvarNomeLista = async () => {
        const listaTemporaria = await AsyncStorage.getItem(metadata.LISTA.NOMELISTA);
        const saveName = nomeLista || "";
        let novaLista = JSON.parse(listaTemporaria);
        novaLista.push(saveName);
        await AsyncStorage.setItem(metadata.LISTA.NOMELISTA, JSON.stringify(novaLista));
        navigation.navigate("Home");
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Adicionar Lista</Text>
            <TextInput placeholder='Digite o nome da lista' value={nomeLista} onChangeText={setNomeLista} />
            <TouchableOpacity onPress={salvarNomeLista} >
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>

        </View>
    );
}