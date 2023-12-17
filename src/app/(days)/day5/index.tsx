import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AirBNBMaps = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: AirBNBMaps" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>day 5</Text>
      <Link href={"/day5/airbnb"} asChild>
        <Button title="Go to AirBNB map" />
      </Link>
    </SafeAreaView>
  );
};

export default AirBNBMaps;
