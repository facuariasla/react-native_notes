import { StyleSheet } from "react-native";
import { View, Text, Button, Pressable } from "react-native";

// El componente <Pressable/> se puede usar como 'boton'
// con el evento onPress={} (en vez de onClick={})
// android_ripple={{color: 'algun color hex'}}
// da un color cuando tocamos el Pressable (ver mas en documentacion) [solo Android]

export default function TaskItem({ item, deleteGoal }) {
  return (    
    <View style={styles.box}>
      <Text style={styles.box_text}>{item.item.data}</Text>
      <Text>{item.item.date}</Text>
      <Button
        color="#E35D6A"
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
