import Homescreen from "@/components/ReviewsApp/Homescreen";
import { useFonts } from "expo-font";
import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    "nunito-regular": require("../assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    "nunito-bold": require("../assets/fonts/Nunito/static/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded)
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Homescreen />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
