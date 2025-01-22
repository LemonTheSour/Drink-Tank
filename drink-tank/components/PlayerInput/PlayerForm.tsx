import { useForm, useFieldArray, Controller } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";

type FormValues = {
  playerinput: {
    name: string;
  };
};

export default function PlayerForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      playerinput: [{ name: "" }],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "playerinput",
    }
  );

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {fields.map((item, index) => (
        <View>
          <Controller
            control={control}
            name={`playerinput.${index}.name`}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <TextInput
                  key={index}
                  placeholder={`Player ${index + 1}`}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              );
            }}
          />
          <button type="button" onClick={() => remove(index)}>
            Delete
          </button>
        </View>
      ))}

      <button type="button" onClick={() => append({ name: "" })}>
        append
      </button>
      <input type="submit" />
    </form>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    padding: 5,
    marginBottom: 4,
    marginRight: 4,
    backgroundColor: "none",
  },
  list: {},
});
