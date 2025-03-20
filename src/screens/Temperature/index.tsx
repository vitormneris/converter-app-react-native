import { useState } from "react"
import { Alert, ScrollView, Text, View } from "react-native"

import { styles } from "./style"

import { Title } from "../../components/Title"
import { RadioOptions } from "../../components/RadioOptions"
import { Input } from "../../components/Input"
import { ShowResult } from "../../components/ShowResult"
import { Button } from "../../components/Button"
import { 
    celsiusToFahrenheit, 
    celsiusToKelvin, 
    fahrenheitToCelsius, 
    fahrenheitToKelvin, 
    kelvinToCelsius,
    kelvinToFahrenheit
} from "../../services/TemperatureConversion"

export const Temperature = () => {
    const [value, setValue] = useState(null)
    const [option, setOption] = useState('')
    const [result, setResult] = useState(0)

    function converter(value: any) {
        if (value == null) {
            Alert.alert('Atenção!', 'Você precisa preencher o valor', [{text: 'OK'}])
            return
        }
        
        switch(option) {
            case 'CF':
                setResult(celsiusToFahrenheit(value))
                break;
            case 'FC': 
                setResult(fahrenheitToCelsius(value))
                break;
            case 'KF': 
                setResult(kelvinToFahrenheit(value))
                break;
            case 'FK':
                setResult(fahrenheitToKelvin(value))
                break;
            case 'CK': 
                setResult(celsiusToKelvin(value))
                break;
            case 'KC': 
                setResult(kelvinToCelsius(value))
                break;
            default:
                Alert.alert('Atenção!', 'Você precisa escolher uma opção', [{text: 'OK'}])
        }
    }

    return (
        <View style={styles.container}>
            <Title title="CALCULADORA DE CONVERSÃO"/>

            <View style={styles.subcontainer}>
                <Input
                label="Insira a unidade de temperatura:"
                placeholder="Ex: 25"
                state={setValue}
                value={value}
                />

                <RadioOptions 
                option1={{code: 'CF', text: 'Celsius-Fahrenheit' }}
                option2={{code: 'FC', text: 'Fahrenheit-Celsius' }}
                option3={{code: 'KC', text: 'Kelvin-Celsius' }}
                option4={{code: 'CK', text: 'Celsius-Kelvin' }}
                option5={{code: 'FK', text: 'Fahrenheit-Kelvin' }}
                option6={{code: 'KF', text: 'Kelvin-Fahrenheit' }}
                setOption={setOption}
                />

                <Button 
                text='Converter' 
                onPress={() => converter(value)}
                />

                <ShowResult
                description="O resultado da conversão:"
                result={result}
                />

                <View style={styles.cardAuthor}>
                    <Text style={styles.author}>Created by João Neris</Text>
                </View>
            </View>
        </View>
    )
}