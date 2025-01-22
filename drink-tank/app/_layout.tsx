import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    IrishGrover: require("../assets/fonts/IrishGrover-Regular.ttf"),
  });

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#005593" },
        contentStyle: { backgroundColor: "#005593" },
      }}
    />
  );
}
