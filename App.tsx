import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DayListItem from "./src/components/core/DayListItem";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// SplashScreen.preventAutoHideAsync();
const days = new Array(24);
export default function App() {
  const [fontLoaded, fonterr] = useFonts({
    Inter: Inter_900Black,
    AmaticRegular: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold
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
    <View style={styles.container}>
      <StatusBar style="auto" />

      <FlatList
        data={days}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item, index }) => <DayListItem day={index + 1} />}
        keyExtractor={(day, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
