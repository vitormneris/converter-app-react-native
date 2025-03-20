import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E0E5E5',
      alignItems: 'center',
      paddingTop: 20
    },

    scrollview: {
      flex: 1,
      width: '100%'
    },

    subcontainer: {
      flex: 1,
      width: '100%',
      backgroundColor: '#C3795455',
      alignItems: 'center',
      bottom: 0,
      borderTopEndRadius: 50,
      borderTopStartRadius: 50
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