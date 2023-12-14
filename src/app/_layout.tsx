import { Stack } from "expo-router";
import { useEffect } from "react";
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

SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
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
    }
  }, [fontLoaded, fonterr]);
  if (!fontLoaded && !fonterr) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "DEVember" }} />
      </Stack>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
