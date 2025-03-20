import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"

export default function Card(props: any) {
    return (
        <TouchableOpacity onPress={props.function} style={[styles.card, {backgroundColor: props.color}]} >
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}