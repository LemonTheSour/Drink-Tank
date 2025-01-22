import { Text, StyleSheet, TextInput } from "react-native";

export default function PlayerInput() {
  return (
    <TextInput
      style={styles.input}
      placeholder={`Player ${index + 1}`}
      {...register(`playerinput.${index}.name` as const, {
        required: true,
      })}
      className={errors?.playerinput?.[index]?.name ? "error" : ""}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    padding: 5,
  },
});
