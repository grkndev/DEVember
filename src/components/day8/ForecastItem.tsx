import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { WeatherForecast } from "@/app/(days)/day8/Weather";
import dayjs from "dayjs";
import { BlurView } from "expo-blur";
export default function ForecastItem({
  forecast,
}: {
  forecast: WeatherForecast;
}) {
  return (
    <BlurView intensity={50} tint="default" blurReductionFactor={100} style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}℃</Text>
      <Text style={styles.date}>
        {dayjs(forecast.dt * 1000).format("ddd HH:mm")}
      </Text>
    </BlurView>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "ghostwhite",
    padding: 10,
    aspectRatio: 3 / 4,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderColor:'gainsboro',
    borderWidth:StyleSheet.hairlineWidth
  },
  temp: {
    fontFamily: "InterBlack",
    fontSize: 30,
    color: "white",
    marginVertical: 10,
  },
  date: {
    fontFamily: "Inter",
    color: "white",
    fontSize: 16,
  },
});
