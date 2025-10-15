import List from "@/components/List";
import TodoApp from "@/components/TodoApp";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Keyboard
} from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("Praise");
  const [age, setAge] = useState(30);

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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

          <TodoApp />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingInline: 20,
    paddingTop: 20,
    flex: 1,
  },

  input: {
    borderColor: "#777",
    padding: 8,
    borderWidth: 1,
    width: 200,
    marginBlock: 20,
  },
});
