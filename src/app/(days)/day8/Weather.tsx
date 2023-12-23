import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import ForecastItem from "@/components/day8/ForecastItem";
import { Stack } from "expo-router";
import AnimatedLottieView from "lottie-react-native";
import WeatherIcons from "@/components/day8/WeatherIcons";
import { StatusBar } from "expo-status-bar";

const BASE_URL = `https://api.openweathermap.org/data/2.5`;
//api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
const OPENWEATHER_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_KEY;
const bgImage =
  "https://e0.pxfuel.com/wallpapers/261/378/desktop-wallpaper-mountain-hq-vertical-mountain.jpg";

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
type Weather = {
  name: string;
  main: MainWeather;
  weather: [
    {
      id: string;
      main: string;
      description: string;
      icon: string;
    }
  ];
};

export type WeatherForecast = {
  main: MainWeather;
  dt: number;
};
export default function WeatherScreen() {
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<WeatherForecast[]>();

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>();

  useEffect(() => {
    if (!location) return;
    fetchWeather();
    fetchForecast();
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const fetchWeather = async () => {
    if (!location) return;
    const res = await (
      await fetch(
        `${BASE_URL}/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPENWEATHER_KEY}&units=metric`
      )
    ).json();
    setWeather(res);
  };

  const fetchForecast = async () => {
    if (!location) return;

    const res = await (
      await fetch(
        `${BASE_URL}/forecast?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${OPENWEATHER_KEY}&units=metric`
      )
    ).json();

    setForecast(res.list);
  };

  if (!weather) return <ActivityIndicator />;
  return (
    <ImageBackground source={{ uri: bgImage }} style={styles.container}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0,0,0,.5)",
        }}
      />
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <WeatherIcons weather={weather.weather[0].main} />
        <Text style={styles.location}>{weather.name}</Text>
        <Text style={styles.temp}>{Math.round(weather.main.temp)}℃</Text>
        <Text style={styles.location}>{weather.weather[0].main}</Text>
      </View>

      <FlatList
        data={forecast}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flexGrow: 0,
          height: 150,
          marginBottom: 40,
        }}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
        renderItem={({ item }) => <ForecastItem forecast={item} />}
      />
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontFamily: "Inter",
    fontSize: 30,
    color: "lightgray",
  },
  temp: {
    fontFamily: "InterBlack",
    fontSize: 150,
    color: "#FEFEFE",
  },
});
