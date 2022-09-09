import { StyleSheet, View, TextInput, Button } from "react-native"


export default function TaskInput({goalInputHandler, enteredGoalText, addGoalHandler}) {

  return (
    <View style={styles.inputsContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Enter a new TASK"
      value={enteredGoalText}
      onChangeText={goalInputHandler}
    />
    <Button title="Add task" onPress={addGoalHandler} />
  </View>
  )

}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: 35,
    borderWidth: 1,
    width: "70%",
    marginBottom: 10,
    marginTop: 10,
    marginRight: 6,
    paddingHorizontal: 10,
  },
});