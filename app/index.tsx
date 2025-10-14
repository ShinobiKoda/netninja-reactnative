import { useState } from "react";
import { StyleSheet, Text, TextInput, View, ScrollView } from "react-native";
import List from "@/components/List";

export default function HomeScreen() {
  const [name, setName] = useState("Praise");
  const [age, setAge] = useState(30);

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline //allows to type multipleline
        style={styles.input}
        placeholder="e.g John Doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>My name is {name}</Text>

      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g 20"
        onChangeText={(val) => setAge(Number(val))}
      />
      <Text>My age is {age}</Text>

      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingInline: 20,
    paddingTop: 20,
    flex: 1
  },

  input: {
    borderColor: "#777",
    padding: 8,
    borderWidth: 1,
    width: 200,
    marginBlock: 20,
  },
});
