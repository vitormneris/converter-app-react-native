import { Text, TextInput, View } from "react-native"
import { styles } from "./style"

export const Input = (props: any) => {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                placeholder={props.placeholder}
                onChangeText={props.state}
                value={props.value}
                style={styles.input}
                keyboardType="numeric"
            />
        </View>
    )
}