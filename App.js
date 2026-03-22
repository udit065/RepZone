import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./components/screens/HomeScreen";
import ExerciseScreen from "./components/screens/ExerciseScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
      headerStyle: { backgroundColor: "#0f172a" },
      headerTintColor: "#fff",
    }}>
        <Stack.Screen name="RepZone" component={HomeScreen} />
        <Stack.Screen name="Exercises" component={ExerciseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}