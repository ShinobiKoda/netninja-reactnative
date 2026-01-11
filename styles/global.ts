import {StyleSheet} from "react-native"

export const globalStyles = StyleSheet.create({
   container: {
    flex: 1,
    paddingInline: 24,
    paddingBlock: 30,
    backgroundColor: "white"
  },

  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "black"
  },

  paragraph:{
    marginVertical: 8,
    lineHeight: 20,
    fontFamily: "nunito-regular"
  }
})