import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

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

  return (
    <View style={styles.container}>
      <TaskInput
        goalInputHandler={goalInputHandler}
        enteredGoalText={enteredGoalText}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsData}>
        <Text style={styles.taskstitle}>List of tasks:</Text>
        {/* <ScrollView> */}
        <View style={styles.goals_container}>
          {courseGoals.length > 0 && (
            <FlatList
              alwaysBounceVertical
              data={courseGoals}
              keyExtractor={(item) => item.id}
              renderItem={(data) => (
                <TaskItem item={data} deleteGoal={deleteGoal} />
              )}
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
});
