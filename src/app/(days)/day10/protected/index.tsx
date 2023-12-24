import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import AnimatedLottieView from "lottie-react-native";
import { Link } from "expo-router";
export default function ProtectedScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AnimatedLottieView
        autoPlay
        loop={false}
        style={{
          width: 200,
        //   aspectRatio: 1,
        }}
        source={require("@assets/lottie/faceid.json")}
      />
      <Text style={{ fontFamily: "InterSemi", fontSize: 20, marginBottom: 20 }}>
        Proected Info
      </Text>
      <FontAwesome5 name="lock" size={75} color="gray" />
      <Link href={"/day10/protected/second"}>Next Page</Link>
    </View>
  );
}
