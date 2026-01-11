import About from "@/components/ReviewsApp/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Aboutpage" component={About} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
