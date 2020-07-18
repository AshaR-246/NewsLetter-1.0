import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class NewsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>India’s message to China: Pullback non-negotiable
Live: Was phone tapping done in Raj? asks BJP
Hackers manipulated staff credentials: Twitter
Bhubaneswar Millionaire Mom Exposes How to Make Lakhs Per Month from Home
Ad: Daily News
Covid-19 live: 3,58,692 active cases now in India
Gold stands the test of time in India</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});
