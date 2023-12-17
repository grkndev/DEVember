import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const day3 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>day3</Text>
      <Link href={"/day3/editor"} asChild>
      <Button title="Go to editor" />
      </Link>
    </View>
  );
};

export default day3;
