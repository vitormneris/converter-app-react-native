import { Text, View } from "react-native"
import { styles } from "./style"

export const Title = (props: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}