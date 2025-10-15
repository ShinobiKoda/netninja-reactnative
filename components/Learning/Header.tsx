import {View, Text, StyleSheet} from "react-native"


const Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.title}>My Todo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "coral",
    marginBottom: 20,
  },

  title: {
    color: "white",
    textAlign: "center",
    marginBlock: "auto"
  }

})

export default Header;