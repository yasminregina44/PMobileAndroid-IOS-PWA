import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"
import ResultImc from "./ResultImc/";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular novamente")
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder="Ex. 1.75"
                    KeybordyType="numeric"
                ></TextInput>

                <Text>Peso</Text>
                <TextInput placeholder="Ex. 75.365"
                    KeybordyType="numeric"
                />
                <Button title="Calcular IMC"></Button>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}