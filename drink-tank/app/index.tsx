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
      <Button text="Quickplay" colour="#8F8CFF" />
      <Button text="Games" colour="#DA8CFF" />
      <Button text="Settings" colour="#FF8C8C" />
      <Button text="Customise" colour="#BABABA" />
    </View>
  );
}
