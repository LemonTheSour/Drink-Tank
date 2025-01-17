import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Link } from "expo-router";
import { type Href } from "expo-router";

type ButtonProps = {
  text: string;
  colour: string;
  href: Href;
};

export function Button({ text, colour, href }: ButtonProps) {
  return (
    <Link href={href} style={[styles.button, { backgroundColor: colour }]}>
      <TouchableOpacity style={styles.touchable}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 64,
    width: "80%",
    borderRadius: 8,
    marginBottom: 20,
  },
  touchable: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {},
});
