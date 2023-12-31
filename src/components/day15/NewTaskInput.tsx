import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Task } from "@/app/(days)/day15/todo";

type NewTaskInput = {
  onAdd: (newTask: Task) => void;
};
export default function NewTaskInput({ onAdd }: NewTaskInput) {
  const [newTasks, setNewTasks] = useState("");
  return (
    <View style={styles.taskContainer}>
      <MaterialCommunityIcons
        name={"checkbox-blank-circle-outline"}
        size={24}
        color={"dimgray"}
      />
      <TextInput
        value={newTasks}
        onChangeText={setNewTasks}
        placeholder="Todo..."
        style={styles.input}
        onEndEditing={() => {
          if (newTasks.length < 1) return;
          onAdd({ title: newTasks, isFinished: false });
          setNewTasks("");
        }}
        // onEndEditing
      />
    </View>
  );
}
const styles = StyleSheet.create({
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "gray",
  },
  input: {
    fontFamily: "InterSemi",
    fontSize: 16,
    color: "dimgray",
    flex: 1,
  },
});
