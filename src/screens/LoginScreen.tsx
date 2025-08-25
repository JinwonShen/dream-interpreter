import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logoIcon}>
          <Text>로고</Text>
        </View>
        <Text style={styles.logoText}>heamong.ai</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    
  },
  logoIcon: {

  },
  logoText: {
    
  }
})