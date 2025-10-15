import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons/';


const TodoItem = ({
  item,
  deleteTodo,
}: {
  item: { text: string; key: string };
  deleteTodo: (key: string) => void;
}) => {
  return (
    <TouchableOpacity style={styles.todos} onPress={() => deleteTodo(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={18} color={"#333"}/>
        <Text style={styles.todoItem}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todos: {
    marginTop: 20,
    padding: 10,
    color: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "dashed"
  },

  item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  todoItem: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans-serif",
  },
});

export default TodoItem;
