import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from "react-native-reanimated";
const onboardingSteps = [
  {
    title: "Welcome to #DEVember",
    desc: "Daily React Native tutorials during December",
    icon: "snowflake",
  },
  {
    title: "Learn and grow together",
    desc: "Learn by building 24 projects with React Native and Expo",
    icon: "code",
  },
  {
    title: "Here we go!",
    desc: "Are you ready? Lets go to lern!",
    icon: "people-arrows",
  },
];
export default function OnBoardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      endOfOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOfOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };
  const endOfOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  const composedSwipe = Gesture.Race(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              {
                backgroundColor: index === screenIndex ? "#CEF202" : "gray",
              },
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={composedSwipe}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={100}
              color="#CEF202"
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(50)}
              style={styles.description}
            >
              {data.desc}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOfOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBlack",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Inter",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 8,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    margin: 5,
    borderRadius: 10,
  },
});
