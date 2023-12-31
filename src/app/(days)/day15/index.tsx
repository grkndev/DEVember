import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Day15 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 15: To Do" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>
        Day 15: To Do
      </Text>
      <Link href={"/day15/todo"} asChild>
        <Button title="Go to To Do" />
      </Link>
    </View>
  );
};

export default Day15;
