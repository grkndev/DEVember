import { View, Text } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import AnimatedLottieView from "lottie-react-native";
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
        More Proected Info
      </Text>
      <FontAwesome5 name="lock" size={75} color="gray" />

    </View>
  );
}
