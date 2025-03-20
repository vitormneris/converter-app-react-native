import { useState } from "react"
import { Alert, ScrollView, Text, View } from "react-native"

import { Title } from "../../components/Title"
import { Input } from "../../components/Input"
import { RadioOptions } from "../../components/RadioOptions"
import { Button } from "../../components/Button"
import { ShowResult } from "../../components/ShowResult"

import { styles } from "./style"

import { 
    kilometerPerHourToMeterPerSecond, 
    kilometerPerHourToMilePerHour, 
    meterPerSecondToKilometerPerHour, 
    meterPerSecondToMilePerHour, 
    milePerHourToKilometerPerHour, 
    milePerHourToMeterPerSecond 
} from "../../services/SpeedConversion"

export const Speed = () => {
    const [value, setValue] = useState(null)
    const [option, setOption] = useState('')
    const [result, setResult] = useState(0)

    function converter(value: any) {
        if (value == null) {
            Alert.alert('Atenção!', 'Você precisa preencher o valor', [{text: 'OK'}])
            return
        }

        switch(option) {
            case 'KMH-MS':
                setResult(kilometerPerHourToMeterPerSecond(value))
                break;
            case 'MS-KMH': 
                setResult(meterPerSecondToKilometerPerHour(value))
                break;
            case 'KMH-MPH': 
                setResult(kilometerPerHourToMilePerHour(value))
                break;
            case 'MPH-KMH':
                setResult(milePerHourToKilometerPerHour(value))
                break;
            case 'MS-MPH': 
                setResult(meterPerSecondToMilePerHour(value))
                break;
            case 'MPH-MS': 
                setResult(milePerHourToMeterPerSecond(value))
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
                label="Insira a unidade de velocidade:"
                placeholder="Ex: 82"
                state={setValue}
                value={value}
                />

                <RadioOptions
                option1={{code: 'MS-KMH', text: 'm/s - km/h' }}
                option2={{code: 'MPH-KMH', text: 'mph - km/h' }}
                option3={{code: 'MS-MPH', text: 'm/s - mph' }}
                option4={{code: 'KMH-MS', text: 'km/h - m/s' }}
                option5={{code: 'KMH-MPH', text: 'km/h - mph' }}
                option6={{code: 'MPH-MS', text: 'mph - m/s' }}
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