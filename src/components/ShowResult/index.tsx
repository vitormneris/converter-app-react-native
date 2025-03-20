import { Text, TextInput, View } from "react-native"
import { styles } from "./style"

export const ShowResult = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.description}>{props.description}</Text>
            <Text style={styles.result}>{props.result}</Text>
        </View>
    )
}