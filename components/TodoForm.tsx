import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

type TodoFormProps = {
  submitHandler: (text: string) => void;
};

const TodoForm = ({ submitHandler }: TodoFormProps) => {
  const [text, setText] = useState("");

  const changeHandler = (val: string) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
      />
      <Button
        title="Submit"
        onPress={() => submitHandler(text)}
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 14,
    marginBottom: 30,
    borderRadius: 10,
  },
});

export default TodoForm;
