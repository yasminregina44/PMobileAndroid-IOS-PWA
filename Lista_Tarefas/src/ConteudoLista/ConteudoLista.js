import { useState } from "react";
import { Touchable, TouchableOpacity, View } from "react-native/types";

export default function ConteudoLista() {

    const [nome, setNome] = useState("");
    const [data, setData] = useState("");

    return (
        <View>
            <Text>{nome}</Text>
            <Text>{data}</Text>
            <TouchableOpacity>
                <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}