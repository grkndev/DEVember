import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Day7 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 7: Record Memos" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>Day 6: Record Memos</Text>
      <Link href={"/day7/memos"} asChild>
      <Button title="Go to Memos Screen" />
      </Link>
    </View>
  );
};

export default Day7;
