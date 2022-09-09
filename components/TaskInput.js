import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

export default function TaskInput({
  goalInputHandler,
  enteredGoalText,
  addGoalHandler,
  visible,
  setModalVisible,
}) {
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputsContainer}>
        <Image style={styles.image} source={require('../assets/objimg.jpg')}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a new TASK"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <View style={styles.btnsContainer}>
          <View style={styles.btn}>
            <Button
              title="Cancel"
              color="#FF7575"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <View style={styles.btn}>
            <Button title="Add task" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image:{
    width:80,
    height : 80,
    margin: 20,
  },
  textInput: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  btnsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  btn: {
    width: "45%",
    margin: 5,
  },
});
