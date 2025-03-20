import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        width: '100%',
        marginVertical: 10,
        alignItems: 'center'
    },

    container: {
        flexDirection: 'row'
    },

    title: {
        fontSize: 20,
        fontFamily: 'google-sans' 
    },

    section: {
        width: '45%',
        alignItems: 'center'
    },

    option: {
        width: '85%',
        borderWidth: 1.5,
        borderRadius: 10,
        paddingVertical: 5,
        marginVertical: 5,
        alignItems: 'center',

    },

    selected: {
        backgroundColor: '#C37954AA'
    },

    optionText: {
        fontSize: 15,
        fontFamily: 'google-sans'
    }
})