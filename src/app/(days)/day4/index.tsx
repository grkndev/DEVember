import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const day3 = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 4: SplashScreen" }} />
      <Text style={{ fontSize: 100, fontFamily: "Amatic" }}>day 4</Text>
      <Link href={"/day4/animation"} asChild>
      <Button title="Go to the animation" />
      </Link>

      <Link href={"/day4/splash"} asChild>
      <Button title="Go to the splash Screen" />
      </Link>
    </View>
  );
};

export default day3;
