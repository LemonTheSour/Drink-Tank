import { Text, StyleSheet } from "react-native";

type TitleProps = {
  title: string;
};
export default function Title({ title }: TitleProps) {
  return <Text style={styles.text}>{title}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "IrishGrover",
    paddingBottom: 64,
    fontSize: 64,
  },
});
