import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/index";
import About from "./pages/about";
import AddPlayers from "./pages/addplayers";
import Games from "./pages/games";
import MainGame from "./pages/maingame";
import Settings from "./pages/settings";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="AddPlayers" component={AddPlayers} />
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="MainGame" component={MainGame} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
