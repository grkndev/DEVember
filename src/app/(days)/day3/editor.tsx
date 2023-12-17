import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

export default function EditorScreen() {
  const [text, setText] = useState("**Hello World!**");
  const [tab, setTab] = useState("edit");
  return (
    <View style={styles.page}>
      <View style={styles.tabContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[
            styles.tab,
            { borderColor: tab === "edit" ? "mediumorchid" : "gray" },
          ]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[
            styles.tab,
            { borderColor: tab === "preview" ? "mediumorchid" : "gray" },
          ]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === "edit" ? (
        <TextInput
          value={text}
          multiline
          numberOfLines={50}
          style={styles.input}
          onChangeText={setText}
        />
      ) : (
        <MarkdownDisplay>{text}</MarkdownDisplay>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    textAlign: "left",
    textAlignVertical: "top",
    padding: 20,
    paddingTop: 20,
    borderRadius: 20,
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  tab: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  tabText: {
    fontFamily: "InterBold",
  },
});
