import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'FFFFFF',
  },
});

export default HomeScreen;
