import { Text, TouchableOpacity } from "react-native"
import { styles } from "./style"

export const Button = (props: any) => {
    return (
        <TouchableOpacity 
        style={styles.container}
        onPress={props.onPress}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )
}