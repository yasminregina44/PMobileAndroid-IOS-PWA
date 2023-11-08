import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import metadata from '../storage.metadata.json'

export default function HomeScreen({ navigation }) {

    const [lista, setLista] = useState("");
    
    const getNomeLista =()=>{
        const getLista = await AsyncStorage.getItem(metadata.LISTA.NOMELISTA)
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Minhas Listas</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditarLista')}>
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>
            {lista &&

            }
        </View>
    );
}