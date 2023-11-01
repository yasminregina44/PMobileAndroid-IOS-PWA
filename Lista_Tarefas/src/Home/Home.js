import { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {

    const [lista, setLista] = useState("");
    useEffect(() => { setLista() }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Minhas Listas de Afazeres</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditarLista')}>
                <Text>Adicionar Lista</Text>
            </TouchableOpacity>
        </View>
    );
}