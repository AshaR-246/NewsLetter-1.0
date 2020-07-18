import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class JokeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
Teacher :What happened in 1809?
Student: Abraham Lincoln was born.
Teacher :What happened in 1819?
Student: Abraham Lincoln was ten years old.

A teacher asked student, What is the full form of Maths?
The student answered, "Mentaly Affected Teachers Harrasing Students"


Teacher: How old is your dad.
Student: He is as old as I am.
Teacher: How is it possible?
Student: Because he became a dad only after I was born.😝

Teacher: Tomorrow there will be a lecture on Pluto and Neptune. Everyone must attend it.
Sudent: Sorry my mom wouldnt let me go so far.
🤣😂😅

Teacher: Whats the meaning of Attention Deficit Hyperactive Disorder?
Student: Bamba'lakkadi Jimba.
Teacher: I dont understand anything you said.
Student: Same here.
</Text>
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
