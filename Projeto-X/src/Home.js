import {useEffect, useState, useMemo} from 'react'
import {Button, View, Text} from 'react-native';

export default function useMemo(){
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(()=>{
        console.log("Alterar contador")
    }, [contador1]);

    useEffect(()=>{
        console.log("Alterar contador 2")
    }, [contador2]);

    const array = useMemo(()=>{
        console.log("Passou pelo use Memo")
        const itens = [...Array(contador1)];
        return(
            <View>
                {
                    itens.map((index, i)=> {
                        console.log("Passou no map")
                        return(
                            <View>
                                <Text>
                                    Item {i + 1}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }, [contador1]);

    console.log("Antes do return")

    return(
        <View>
            <Text>
                contador: {contador1}
                <Button title="click" onPress={()=> setContador1(contador1+1)}/>
            </Text>
            <Text>
                contador2: {contador2}
                <Button title="click" onPress={()=> setContador2(contador2+1)}/>
            </Text>

            {array}
        </View>
    )

}