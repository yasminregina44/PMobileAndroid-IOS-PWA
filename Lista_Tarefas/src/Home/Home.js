import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import metadata from '../storage.metadata.json'
import { useIsFocused } from '@react-navigation/native';

export default function HomeScreen({ navigation }) {
    const focus = useIsFocused();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        getNomeLista();
    }, [focus]);

    const getNomeLista = async () => {
        const getLista = await AsyncStorage.getItem(metadata.LISTA.NOMELISTA);
        const listaArray = getLista ? JSON.parse(getLista) : [];
        setLista(listaArray);
    };

    const printList = useMemo(() => {
        if (lista && lista.length > 0) {
            return lista.map((list, index) => (
                <View key={index}>
                    <Text onPress={()=>navigation.navigate('ConteudoLista')}>{list}</Text>
                </View>
            ));
        }
    }, [lista]);

    return (
        <View>
            <Text>Minhas Listas</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditarLista')}>
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>
            {printList}
        </View>
    );
}