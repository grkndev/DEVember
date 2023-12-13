import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import DayListItem from "@components/core/DayListItem";

const days = new Array(24);
export default function HomeScreen() {
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
