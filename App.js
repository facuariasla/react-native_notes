import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import { useState } from "react";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    //Actual time
    if (!enteredGoalText) return;
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
    setModalVisible(false);
  }

  function deleteGoal(goalId) {
    const newArray = courseGoals.filter((el) => el.id != goalId);
    setCourseGoals(newArray);
  }

  return (
    <View style={styles.container}>
      {/* <Button
        title="Add New Task"
        color="#4AB06C"
        
      /> */}
      <Pressable
        android_ripple={{color:'#57C67C'}}
        style={styles.pressableAdd}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.pressableText}>ADD NEW TASK</Text>
      </Pressable>

      <TaskInput
        goalInputHandler={goalInputHandler}
        enteredGoalText={enteredGoalText}
        addGoalHandler={addGoalHandler}
        visible={modalVisible}
        setModalVisible={setModalVisible}
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
    paddingTop: 80,
  },
  pressableAdd: {
    height: 60,
    width: "100%",
    backgroundColor: "#4AB06C",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  pressableText: {
    fontSize: 16,
    color: "#fff",
  },
  goalsData: {
    flex: 6,
    paddingTop: 20,
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
