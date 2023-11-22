import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';

export default function ConteudoLista({ navigation }) {

    const [nomeItem, setNomeItem] = useState("")

    const salvarNomeItem = async () => {
        const itemTemporario = await AsyncStorage.getItem(metadata.ITEM.NOMEITEM);
        const saveItem = nomeItem || "";
        let novoItem = JSON.parse(itemTemporario);
        novoItem.push(saveItem);
        await AsyncStorage.setItem(metadata.ITEM.NOMEITEM, JSON.stringify(novoItem));
        navigation.navigate("Home");
    }


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Adicionar Item</Text>
            <TextInput placeholder='Digite um item da lista' value={nomeItem} onChangeText={setNomeItem} />
            <TouchableOpacity onPress={salvarNomeItem} >
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>

        </View>
    )
}