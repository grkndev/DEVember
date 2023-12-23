import { View, Text } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

export default function WeatherIcons({ weather }: { weather: any }) {
  let icon = require("@assets/lottie/raincloud.json");
  const mistWeathers = [
    "mist",
    "smoke",
    "haze",
    "dust",
    "fog",
    "sand",
    "dust",
    "ash",
    "squall",
    "tornado",
  ];
  weather = mistWeathers.includes(String(weather).toLocaleLowerCase())
    ? "mist"
    : weather;
    
  switch (String(weather).toLocaleLowerCase()) {
    case "mist": {
      icon = require("@assets/lottie/mist.json");
      break;
    }
    case "clear": {
      icon = require("@assets/lottie/sun.json");
      break;
    }
    case "snow": {
      icon = require("@assets/lottie/snow.json");
      break;
    }
    case "clouds": {
      icon = require("@assets/lottie/cloud.json");
      break;
    }
  }
  return (
    <AnimatedLottieView
      autoPlay
      loop
      style={{
        width: 200,
        aspectRatio: 1,
      }}
      source={icon}
    />
  );
}
type Weather = {
  weather: "mist" | "clouds" | "snow" | "clear";
};
