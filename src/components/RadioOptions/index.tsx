import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useState } from "react"


export const RadioOptions = (props: any) => {
    const [chooseOption, setChooseOption] = useState('')
    
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Escolha uma opção:</Text>
            <View style={styles.container}>
                <View style={styles.section}>
                    <TouchableOpacity 
                        style={[chooseOption === props.option1.code && styles.selected, styles.option]}
                        onPress={() => {
                            setChooseOption(props.option1.code)
                            props.setOption(props.option1.code)
                        }}
                        >
                        <Text style={styles.optionText}>{props.option1.text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[chooseOption === props.option2.code && styles.selected, styles.option]}
                        onPress={() => {
                            setChooseOption(props.option2.code)
                            props.setOption(props.option2.code)
                        }}                        >
                        <Text style={styles.optionText}>{props.option2.text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[chooseOption === props.option3.code && styles.selected, styles.option]}
                        onPress={() => {
                            setChooseOption(props.option3.code)
                            props.setOption(props.option3.code)
                        }}                        >
                        <Text style={styles.optionText}>{props.option3.text}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <TouchableOpacity 
                        style={[chooseOption === props.option4.code && styles.selected, styles.option]}
                        onPress={() => {
                            setChooseOption(props.option4.code)
                            props.setOption(props.option4.code)
                        }}                        >
                    <Text style={styles.optionText}>{props.option4.text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[chooseOption === props.option5.code && styles.selected, styles.option]}
                        onPress={() => {
                            setChooseOption(props.option5.code)
                            props.setOption(props.option5.code)
                        }}                        >
                        <Text style={styles.optionText}>{props.option5.text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[chooseOption === props.option6.code && styles.selected, styles.option]}
                        onPress={() => {
                            setChooseOption(props.option6.code)
                            props.setOption(props.option6.code)
                        }}                        >
                        <Text style={styles.optionText}>{props.option6.text}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}