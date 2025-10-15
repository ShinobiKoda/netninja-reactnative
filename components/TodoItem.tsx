import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoItem = ({
  item,
  deleteTodo,
}: {
  item: { text: string; key: string };
  deleteTodo: (key: string) => void;

}) => {
  return (
    <TouchableOpacity style={styles.todos} onPress={() => deleteTodo(item.key)}>
      <Text style={styles.todoItem}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todos: {
    backgroundColor: "crimson",
    marginTop: 20,
    padding: 10,
    color: "white",
  },

  todoItem: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "sans-serif",
  },
});

export default TodoItem;
