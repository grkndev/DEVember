import { Stack } from "expo-router";
import { useEffect } from "react";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [fontLoaded, fonterr] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });
  useEffect(() => {
    if (fontLoaded || fonterr) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, fonterr]);
  if (!fontLoaded && !fonterr) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "DEVember" }} />
    </Stack>
  );
};

export default RootLayout;
