import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const List = () => {
  const [people, setPeople] = useState([
    { name: "Praise", age: 20, id: 1 },
    { name: "Praise", age: 20, id: 2 },
    { name: "Praise", age: 20, id: 3 },
    { name: "Praise", age: 20, id: 4 },
    { name: "Praise", age: 20, id: 5 },
    { name: "Praise", age: 20, id: 6 },
    { name: "Praise", age: 20, id: 7 },
    { name: "Praise", age: 20, id: 8 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.listHeading}>Lists</Text>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        data={people}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>Name: {item.name}</Text>
            <Text style={styles.listText}>Age: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },

  listHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },

  listItem: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    backgroundColor: "blue",
    padding: 10,
  },

  listText: {
    color: "white"
  }
});

export default List;
