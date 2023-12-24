import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Day10 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 10: Biometrics" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>Day 10: Biometrics</Text>
      <Link href={"/day10/protected"} asChild>
      <Button title="Go to Protected App" />
      </Link>
    </View>
  );
};

export default Day10;
