import { useState } from "react";
import { FlatList, StyleSheet, View, Alert } from "react-native";
import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todo, setTodo] = useState([
    { text: "Buy Coffee", key: "1" },
    { text: "Do something else", key: "2" },
    { text: "Practice", key: "3" },
  ]);

  const deleteTodo = (key: string) => {
    setTodo((previousTodo) => {
      return previousTodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text: string) => {
    if (text.length >= 6) {
      setTodo((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    }else{
      Alert.alert("Oops", "Todos must be three chars long", [
        {text: "Understood", onPress: () => console.log("Alert closed")}
      ])
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {/*  */}
        <Header />
        {/* Todo Form */}
        <TodoForm submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            contentContainerStyle={styles.listContent}
            data={todo}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteTodo={deleteTodo} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },

  listItem: {
    backgroundColor: "brown",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 14,
    textAlign: "center",
    marginBottom: 12,
    borderRadius: 6,
  },
});

export default TodoApp;
