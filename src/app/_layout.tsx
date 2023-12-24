import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  useFonts,
  Inter_900Black,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "@/components/day4/AnimatedSplashScreen";
import BiometricsProvider from "@/components/day10/BiometricsProvider";

// SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [fontLoaded, fonterr] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontLoaded || fonterr) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }
  }, [fontLoaded, fonterr]);

  if (!appReady || !splashAnimationFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <BiometricsProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="index" options={{ title: "DEVember" }} />
        </Stack>
      </GestureHandlerRootView>
    </BiometricsProvider>
  );
};

export default RootLayout;
