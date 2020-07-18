import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
           
           <TouchableOpacity 
            style={[styles.buttons,{backgroundColor:"red"}]} 
            onPress={() => this.props.navigation.navigate('jokeScreen')}>
              <Text>Read a Joke</Text>
          </TouchableOpacity>


             <TouchableOpacity 
            style={[styles.buttons,{backgroundColor:"yellow"}]} 
            onPress={() => this.props.navigation.navigate('HoroScopeScreen')}>
              <Text>Horoscop</Text>
          </TouchableOpacity>
 <TouchableOpacity 
            style={[styles.buttons,{backgroundColor:"lightgreen"}]} 
            onPress={() => this.props.navigation.navigate('WeatherScreen')}>
              <Text>Weather</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.buttons,{backgroundColor:"pink"}]} 
            onPress={() => this.props.navigation.navigate('NewsScreen')}>
              <Text>Top News & COVID-19  </Text>
          </TouchableOpacity>

          </View>
          <View style={styles.ratingContainer}>
            <Text style={{ textAlign: 'center', margin:5 }}>Rate us</Text>
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50, marginLeft: 5 }}
                source={require('../assets/thumbs-up-hand-symbol.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  marginTop: -35,
                  marginLeft: 100,
                }}
                source={require('../assets/thumbs-down-silhouette.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 150,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
});
