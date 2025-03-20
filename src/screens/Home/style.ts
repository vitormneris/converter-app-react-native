import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E0E5E5',
      alignItems: 'center',
      paddingTop: 20
    },

    subcontainer: {
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      alignItems: 'center',
      bottom: 0,
      borderTopEndRadius: 50,
      borderTopStartRadius: 50
    },
    
    description: {
      marginTop: 30,
      fontSize: 15,
      paddingHorizontal: 10,
      fontFamily: 'google-sans',
      textAlign: 'justify'
    },

    cardText: {
      marginVertical: 20,
      marginHorizontal: 15
    },

    cardContainer: {
      flexDirection: 'row',
    },

    cardAuthor: {
      flex: 1,
      justifyContent: 'flex-end',
      bottom: 0
    },

    author: {
      fontFamily: 'google-sans',
      fontStyle: 'italic',
      fontSize: 15
    }
  });