import { globalStyles } from "@/styles/global";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "./Card";

const Homescreen = () => {
  const navigation = useNavigation<any>();

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breadth of Fresh Air",
      rating: 5,
      body: "lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      key: "1",
    },
    {
      title: "Ghost of Tshuima",
      rating: 10,
      body: "lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      key: "2",
    },
    {
      title: "Red Dead Redemption",
      rating: 9.8,
      body: "lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      key: "3",
    },
  ]);

  return (
    <View style={globalStyles.container}>
      <Text style={styles.titleHeading}>Games</Text>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleHeading: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default Homescreen;
