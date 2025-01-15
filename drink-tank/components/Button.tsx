import { StyleSheet, TouchableOpacity, Text, ColorValue } from "react-native";
import { Colours } from "../constants/Colours";

type ButtonProps = {
  text: string;
  colour: string;
};

export function Button({ text, colour }: ButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colour }]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "80%",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {},
});
