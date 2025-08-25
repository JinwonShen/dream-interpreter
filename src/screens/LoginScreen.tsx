import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* 로고 영역 */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Images/heamong-logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        ></Image>
        <Text style={styles.logoText}>heamong.ai</Text>
      </View>

      <View>
        <h1>dd</h1>
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
    alignItems: "center",
    marginBottom: 40,
  },
  logoImage: {
    width: 72,
    height: 72,
    marginBottom: 16,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#A539FF',
    fontFamily: 'Lexend-Bold',
  }
})