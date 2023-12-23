import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Day8 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 8: Weather App" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>Day 8: Weather App</Text>
      <Link href={"/day8/Weather"} asChild>
      <Button title="Go to Weather" />
      </Link>
    </View>
  );
};

export default Day8;
