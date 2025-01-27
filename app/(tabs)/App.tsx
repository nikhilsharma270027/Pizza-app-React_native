// import { Tabs } from 'expo-router'
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Tabs from ".";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInRight, LayoutAnimationConfig } from "react-native-reanimated";

const tabs = ["#FF005C", "#FFBD00", "#00B3E6", "#00CC96", "gold"]

export default function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <Tabs
        data={[
          { key: 1, label: "Buoy" },
          { key: 2, label: "Fresh fish" },
          { key: 3, label: "Sail" },
          { key: 4, label: "Ship it" },
          { key: 5, label: "Manage it" },
        ]}
        
        
        onChange={(index) => setSelectedIndex(index)}
        selectedIndex={selectedIndex}
      />
      <LayoutAnimationConfig skipEntering>
      <Animated.View
      key={`tab-content-${selectedIndex}`}
      entering={FadeInRight.springify().damping(80).stiffness(200)}
      exiting={FadeInRight.springify().damping(80).stiffness(200)}
      style={{
        backgroundColor: tabs[selectedIndex],
        flex: 1,
        borderRadius: 8,
        margin: 8
      }}>

      </Animated.View>
      </LayoutAnimationConfig>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 6,
    gap:12  
  },
})
