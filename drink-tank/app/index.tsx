import { View } from "react-native";
import { Button } from "@/components/Button";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button text="Quickplay" colour="#8F8CFF" href="/quickplay" />
      <Button text="Games" colour="#DA8CFF" href="/games" />
      <Button text="Settings" colour="#FF8C8C" href="/settings" />
      <Button text="Customise" colour="#BABABA" href="/customise" />
    </View>
  );
}
