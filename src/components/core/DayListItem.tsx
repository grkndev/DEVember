import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const days = new Array(24);
export default function DayListItem(props) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{props.day + 1}</Text>
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
  box: {
    backgroundColor: "#F9EDE3",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,

    flex: 1,
    aspectRatio: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 30,
  },
});
