import { View, Text, StyleSheet } from "react-native";

const SandBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>SandBox</Text>
      <Text style={styles.boxTwo}>SandBox</Text>
      <Text style={styles.boxThree}>SandBox</Text>
      <Text style={styles.boxFour}>SandBox</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    // flex: 1,
    paddingTop: 20,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around"
  },

  boxOne: {
    padding:  10,
    flex: 1,
    backgroundColor: "#ddd"
  },

  boxTwo: {
    padding:  20,
    flex: 2,
    backgroundColor: "coral"
  },

  boxThree: {
    padding:  30,
    flex: 1,
    backgroundColor: "gold"
  },
  boxFour: {
    padding:  40,
    flex: 1,
    backgroundColor: "yellow"
  },
});

export default SandBox;
