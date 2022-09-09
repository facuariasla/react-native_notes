import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //Actual time
    const actualTime = `${new Date().toLocaleDateString()} - ${new Date().getHours()}:${new Date().getMinutes()}`;
    console.log(actualTime);
    // console.log(enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText])
    // Mejor practica:
    setCourseGoals((currentCourseGoals) => [
      {
        id: new Date() * 1,
        data: enteredGoalText,
        date: actualTime,
      },
      ...currentCourseGoals,
    ]);
    setEnteredGoalText("");
  }

  function deleteGoal(goalId) {
    const newArray = courseGoals.filter((el) => el.id != goalId);
    setCourseGoals(newArray);
  }

  // Flatlist box:
  function renderItem({ item }) {
    return (
      <View style={styles.box}>
        <Text style={styles.box_text}>{item.data}</Text>
        <Text>{item.date}</Text>
        <Button
          color="#ff4d4d"
          title="DELETE"
          onPress={() => deleteGoal(item.id)}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a new TASK"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <Button title="Add task" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsData}>
        <Text style={styles.taskstitle}>List of tasks:</Text>
        {/* <ScrollView> */}
        <View style={styles.goals_container}>
          {courseGoals.length > 0 && (
            <FlatList
              alwaysBounceVertical
              data={courseGoals}
              keyExtractor={(item) => item.id}
              renderItem={renderItem}
            ></FlatList>
          )}
          {courseGoals.length === 0 && (
            <View>
              <Text>ADD A TASK PLEASE 📃</Text>
            </View>
          )}
        </View>

        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
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
  goalsData: {
    flex: 6,
  },
  taskstitle: {
    fontSize: 22,
    paddingBottom: 4,
  },
  goals_container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    flex: 1,
    minHeight: 30,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#000",
    margin: 4,
    padding: 4,
    flexDirection: "column",
  },
  box_text: {
    marginBottom: 14,
  },
});
