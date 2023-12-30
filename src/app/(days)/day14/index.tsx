import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const Day14 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 14: Push Notifications" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>
      Day 14: Push Notifications
      </Text>
      <Link href={"/day14/notifications"} asChild>
        <Button title="Go to Notifications" />
      </Link>
    </View>
  );
};

export default Day14;
