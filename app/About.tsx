import {View, Text, StyleSheet} from "react-native";
import { Link } from "expo-router";

const About = () => {
  return(
    <View style={styles.container}>
      <Text>AboutPage</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ccc"
  }
})

export default About