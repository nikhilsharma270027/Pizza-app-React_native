import { router } from "expo-router";
import React, { useEffect } from "react";
import { View, Image, StyleSheet, Button } from "react-native";

export default function SplashScreen({ navigation }: any) {
 

  return (
    <View style={styles.container}>
      {/* Replace the path below with your actual image */}
      <Image 
        source={require("../assets/images/splash-image.jpg")} 
        style={styles.logo} 
        resizeMode="cover"
      />
      <Button
        title="Next"
        onPress={() => router.push("/Sign-in")} // Navigate to tabs screen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    top: 100,
    

  },
  logo: {
    width: 200,
    height: 200,
    maxWidth: 500
  },
});
