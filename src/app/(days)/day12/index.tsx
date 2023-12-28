import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Day12 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 12: Video Feed" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>
        Day 12: Video Feed
      </Text>
      <Link href={"/day12/feed"} asChild>
        <Button title="Go to Feed" />
      </Link>
    </View>
  );
};

export default Day12;
