import { Keyboard, ScrollView, TouchableWithoutFeedback } from "react-native";
import Learningpage from "@/components/Learning/Learningpage"
import Homescreen from "@/components/ReviewsApp/Homescreen";

export default function HomeScreen() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* <Learningpage /> */}
        <Homescreen />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
