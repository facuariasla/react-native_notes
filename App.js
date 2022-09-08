import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    // setCourseGoals([...courseGoals, enteredGoalText])
    // Mejor practica:
    setCourseGoals((currentCourseGoals) => [
      {
        id: new Date() * 1,
        data: enteredGoalText,
      },
      ...currentCourseGoals,
    ]);
    setEnteredGoalText("");
  }

  function deleteGoal(goalId){
    const newArray = courseGoals.filter((el)=> el.id != goalId);
    setCourseGoals(newArray);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          value={enteredGoalText}
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsData}>
        <Text>List of goals...</Text>
        <View style={styles.goals_container}>
          {courseGoals?.map((goal) => (
            <View style={styles.box} key={goal.id}>
              <Text style={styles.box_text}>{goal.data}</Text>
              <Button color="#ff4d4d" title='DELETE' onPress={()=>deleteGoal(goal.id)}/>
            </View>
          ))}
        </View>
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
  goals_container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  box: {
    width: "100%",
    minHeight: 30,
    borderWidth: 2,
    borderColor: "#000",
    margin: 4,
    padding: 4,
    flexDirection: "column",
  },
  box_text: {
    marginBottom: 10,
  },

});
