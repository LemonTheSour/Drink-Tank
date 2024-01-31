import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Link } from "expo-router";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>This is the Index Page</Text>
      <StatusBar style="auto" />
      <Button
        title="About Page"
        onPress={() => navigation.navigate("About")}
      ></Button>
    </View>
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
