import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,} from 'react-native';


export default class Bookings extends Component {

  render() {
    return (

              <View style={styles.mainform}>
              <Text style={styles.text}>Bookings View</Text>
                <Text>UNDER CONSTRUCTION</Text>
              </View>
    );
  }
}

const styles = StyleSheet.create({
  mainform: {
    flex: 1,
    justifyContent:'center',
    alignItems:"center",
    //backgroundColor: 'red',
  },
    text: {
      fontSize:30,
      color:"black",
  },
});