import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Day11 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 11: VisionCamera" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>
        Day 11: VisionCamera
      </Text>
      <Link href={"/day11/camera"} asChild>
        <Button title="Go to VisionCamera App" />
      </Link>
    </View>
  );
};

export default Day11;
