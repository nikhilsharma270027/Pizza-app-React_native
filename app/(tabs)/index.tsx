import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Item {
  key: number;
  name: string;
}

const MenuTab: Item[] = [
  { key: 1, name: "Starters" },
  { key: 2, name: "Italian" },
  { key: 3, name: "Mexican" },
  { key: 4, name: "Classical" },
  { key: 5, name: "Grilled" }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view2}>
        <View style={styles.viewRow}>
          {MenuTab.map((item) => (
            <Text style={styles.text} key={item.key}>
              {item.name}
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE4D9",
    justifyContent: "flex-start", // Ensures it aligns at the top
    margin: 6,
  },
  view2: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginTop: 20, // Adds a little space from the top
  },
  viewRow: {
    flexDirection: "row",
    justifyContent: "flex-start", // Ensures text is aligned from the start
    gap: 20,
    flexWrap: "wrap", // Allows wrapping if the content exceeds screen width
  },
  text: {
    fontSize: 24,
    backgroundColor: "#FAB678",
    borderRadius: 50,
    padding: 12,
    paddingHorizontal: 24,
    textAlign: "center", // Centers the text within the button-like view
  },
});
