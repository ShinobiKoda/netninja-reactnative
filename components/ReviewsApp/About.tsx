import {View, Text} from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "@/styles/global";

const About = () => {
  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>AboutPage</Text>
      
    </View>
  )
}

export default About