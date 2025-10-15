import {View, Text, StyleSheet} from "react-native";
import { Link } from "expo-router";

const ReviewDetails = () => {
  return(
    <View style={styles.container}>
      <Text>Review Details</Text>
      
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

export default ReviewDetails