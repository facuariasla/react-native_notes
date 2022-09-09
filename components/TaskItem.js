import { StyleSheet } from "react-native";
import { View, Text, Button } from "react-native";

export default function TaskItem({ item, deleteGoal }) {
  return (
    <View style={styles.box}>
      <Text style={styles.box_text}>{item.item.data}</Text>
      <Text>{item.item.date}</Text>
      <Button
        color="#ff4d4d"
        title="DELETE"
        onPress={() => deleteGoal(item.item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
