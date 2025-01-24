import { useForm, useFieldArray, Controller } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import { router } from "expo-router";

type FormValues = {
  playerinput: {
    name: string;
  }[];
};

const onSubmit = (data: FormValues) => {
  console.log(data);
  router.replace("/playgame");
};

export default function PlayerForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      playerinput: [{ name: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "playerinput",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((item, index) => (
        <View>
          <Controller
            control={control}
            name={`playerinput.${index}.name`}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <TextInput
                  style={styles.input}
                  key={index}
                  placeholder={`Player ${index + 1}`}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                />
              );
            }}
          />
          {index == fields.length - 1 && index > 0 ? (
            <button
              style={styles.delete}
              type="button"
              onClick={() => remove(index)}
            >
              Delete
            </button>
          ) : null}
          {index == fields.length - 1 ? (
            <button
              style={styles.add}
              type="button"
              onClick={() => append({ name: "" })}
            >
              Add
            </button>
          ) : null}
        </View>
      ))}
      <input type="submit" value={"Play!"} />
    </form>
  );
}

const styles = StyleSheet.create({
  view: {},
  input: {
    borderBottomWidth: 1,
    borderBottomLeftRadius: 5,
    padding: 5,
    marginBottom: 6,
    marginRight: 4,
    backgroundColor: "none",
  },
  delete: {
    backgroundColor: "red",
    width: "50%",
    borderWidth: 0,
    borderRadius: 10,
    margin: 5,
    padding: 4,
  },
  add: {
    backgroundColor: "green",
    width: "50%",
    borderWidth: 0,
    borderRadius: 10,
    margin: 5,
    padding: 4,
  },
  list: {},
});
