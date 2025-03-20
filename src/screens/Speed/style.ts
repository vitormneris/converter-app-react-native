import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5E5',
    alignItems: 'center',
    paddingTop: 20,
  },

  scrollview: {
    width: '100%'
  },

  subcontainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#918CBF99',
    alignItems: 'center',
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