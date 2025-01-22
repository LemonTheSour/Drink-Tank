import { View } from "react-native";
import Title from "@/components/Title";
import PlayerForm from "@/components/PlayerInput/PlayerForm";

export default function Quickplay() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title title="Add Players" />
      <PlayerForm />
    </View>
  );
}
