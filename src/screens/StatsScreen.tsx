import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>꿈 통계</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
