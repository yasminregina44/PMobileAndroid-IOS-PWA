import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';

export default function HomeScreen() {

    const[nomeLista, setNomeLista]=useState("");
    
    const salvarNomeLista=async()=>(
        const salvarNome = nomeLista || "";
        await AsyncStorage.setItem(metadata.LISTA.NOMELISTA, salvarNome);
    )

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Adicionar Lista</Text>
            <TextInput placeholder='Digite o nome da lista' value={nomeLista} onChangeText={setNomeLista}/>
        </View>
    );
}