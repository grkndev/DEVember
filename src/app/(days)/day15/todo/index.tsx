import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewTaskInput from "@/components/day15/NewTaskInput";
import { SafeAreaView } from "react-native-safe-area-context";

export type Task = {
  title: string;
  isFinished: boolean;
};
const dummyTasks: Task[] = [
  {
    title: "Setup Day 15 structure",
    isFinished: true,
  },
  {
    title: "Render a list of tasks",
    isFinished: false,
  },
  {
    title: "Add a new task",
    isFinished: false,
  },
  {
    title: "Change the statys of a task",
    isFinished: false,
  },
  {
    title: "Separate in a tabs: todo, and complate",
    isFinished: false,
  },
];
export default function TodoScreen() {
  const [tasks, setTasks] = useState<Task[]>(dummyTasks);

  const onItemPressed = (index: number) => {
    setTasks((currentTaks) => {
      const updatedTasks = [...currentTaks];
      updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
      return updatedTasks;
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.page}
    //   keyboardVerticalOffset={100}
    >
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView>
        <FlatList
          data={tasks}
          contentContainerStyle={{ gap: 5 }}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => onItemPressed(index)}
              style={styles.taskContainer}
            >
              <MaterialCommunityIcons
                name={
                  item.isFinished
                    ? "checkbox-marked-circle-outline"
                    : "checkbox-blank-circle-outline"
                }
                size={24}
                color={item.isFinished ? "green" : "dimgray"}
              />
              <Text
                style={[
                  styles.taskTitle,
                  {
                    textDecorationLine: item.isFinished
                      ? "line-through"
                      : "none",
                  },
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
          )}
          ListFooterComponent={() => (
            <NewTaskInput
              onAdd={(newTodo: Task) => setTasks((curr) => [...curr, newTodo])}
            />
          )}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: "white",
    flex: 1,
  },
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  taskTitle: {
    fontFamily: "InterSemi",
    fontSize: 16,
    color: "dimgray",
    flex: 1,
  },
});
