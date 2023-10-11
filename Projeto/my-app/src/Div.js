import { Text, View } from "react-native";

export default function Div(props){

    return (
        <View>
            <Text>
                {
                    // spoof-warning
                    props.id
                }
            </Text>
        </View>
    )
}