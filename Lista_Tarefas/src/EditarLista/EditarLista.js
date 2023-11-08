import { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';

export default function EditarLista({ navigation }) {

    const [nomeLista, setNomeLista] = useState("");
    const [arrayLista, setArrayLista] = useState([])

    useEffect(() => { getNomeLista() }, []);
    useEffect(() => { salvarNomeLista() }, [])

    const getNomeLista = async () => {
        const getLista = await AsyncStorage.getItem(metadata.LISTA.NOMELISTA);
        if (getLista) {
            setNomeLista(JSON.parse(getLista));
        }
    }

    const salvarNomeLista = async () => {
        const salvarNome = nomeLista || "";
        await AsyncStorage.setItem(metadata.LISTA.NOMELISTA, JSON.stringify(salvarNome));
    }

    const adicionarLista = () => {
        if (nomeLista.trim() != "") {
            setArrayLista([...arrayLista, nomeLista]);
            setNomeLista(""); ''
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Adicionar Lista</Text>
            <TextInput placeholder='Digite o nome da lista' value={nomeLista} onChangeText={setNomeLista} />
            <TouchableOpacity onPress={() => navigation.navigate('Home') + adicionarLista()} >
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>

        </View>
    );
}