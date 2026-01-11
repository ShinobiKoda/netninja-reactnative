import HomeScreen from "@/components/ReviewsApp/Homescreen";
import ReviewDetails from "@/components/ReviewsApp/ReviewDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "@/components/ReviewsApp/Header";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
