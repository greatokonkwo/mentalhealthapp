import React from 'react';
import {View, SafeAreaView, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';

const LandingScreen = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View>
        <FastImage source={{uri: './src/services/shared/assets/images/teddy_logo.png', priority: FastImage.priority.high}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'FFFFFF',
  },
});

export default LandingScreen;
