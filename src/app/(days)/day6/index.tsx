import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const day3 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 6: Tinder Swipe" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>Day 6: Tinder Swipe</Text>
      <Link href={"/day6/tinder"} asChild>
      <Button title="Go to Tinder" />
      </Link>
    </View>
  );
};

export default day3;
