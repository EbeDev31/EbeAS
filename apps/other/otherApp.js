import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet,} from 'react-native';

import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Offered from './service/offered';
import Bookings from './service/bookings';

export default class OfferService extends Component {

  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Offered">
            <Offered />
          </Tab>
          <Tab heading="Bookings">
            <Bookings />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  mainform: {
    //backgroundColor: 'red',
    flex: 1,
    // justifyContent:'flex-start',

    // alignItems:"center",
  },

  text: {
      fontSize:30,
      color:"black",
  },

});