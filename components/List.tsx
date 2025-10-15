import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const List = () => {
  const [people, setPeople] = useState([
    { name: "Praise", age: 20, id: 1 },
    { name: "Praise", age: 20, id: 2 },
  ]);

  const pressHandler = (id: number) => {
    console.log(id)
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.listHeading}>Lists</Text>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=> pressHandler(item.id)}>
            <View style={styles.listItem}>
              <Text style={styles.listText}>Name: {item.name}</Text>
              <Text style={styles.listText}>Age: {item.age}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

  listHeading: {
    fontWeight: "bold",
    fontSize: 20,
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },

  listItem: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    backgroundColor: "blue",
    padding: 10,
  },

  listText: {
    color: "white",
  },
});

export default List;
