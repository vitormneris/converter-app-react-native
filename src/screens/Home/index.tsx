import React from 'react'

import { Text, View } from "react-native"
import { styles } from "./style"
import Card from "../../components/Card"
import { Title } from "../../components/Title"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type RootStackParamList = {
    Home: undefined;
    Temperature: undefined;
    Speed: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Home">;


export const Home = () => {
    const { navigate }  = useNavigation<NavigationProps>()

    return (
        <View style={styles.container}>
            <Title title="CALCULADORA DE CONVERSÃO"/>

            <View style={styles.subcontainer}>

                <View style={styles.cardText}>
                    <Text style={styles.description}>
                        Calculadora de Conversão é um aplicativo prático e intuitivo que permite converter 
                        rapidamente unidades de temperatura  e velocidade.
                    </Text>
                </View>

                <View style={styles.cardContainer}>

                    <Card 
                        title='Converter temperatura' 
                        color='#C37954' 
                        function={() => navigate('Temperature')}
                    />
                    <Card 
                        title='Converter velocidade' 
                        color='#000055' 
                        function={() => navigate('Speed')}
                    />

                </View>
                
                <View style={styles.cardAuthor}>
                    <Text style={styles.author}>Created by João Neris</Text>
                </View>
            </View>
        </View>
    )
}