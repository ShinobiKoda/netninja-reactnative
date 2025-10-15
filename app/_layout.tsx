import { Stack } from "expo-router";

export default function Layout() {
  return  (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="About" options={{ title: "About" }} />
      <Stack.Screen name="ReviewDetails" options={{ title: "Review" }} />
    </Stack>
  );
}
