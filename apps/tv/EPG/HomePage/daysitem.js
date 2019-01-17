import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { daydate } from './jsonData';

export default class DaysItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: daydate,
    };

    // this.renderItem=this.renderItem.bind(this);
  }

dateExtractor=(date)=>{
    let realDate="";
    let day=date.substring(5,7);
    let month =date.substring(8,10);
    //2018-12-11T13:00:00+01:00
    realDate=day+"." +month;
    return realDate;
}
/*  renderItem(data) {
    let { item } = data;
    return (
      <View style={styles.listitems}>
        <Text style={styles.text}>{item.day}</Text>
        <Text style={styles.text}>{item.Date}</Text>
      </View>
    );
  }*/

  render() {
    return (
      <View style={styles.dayProgram}>
        <TouchableOpacity style={styles.star}>
          <Text>$$</Text>
        </TouchableOpacity>

        <View style={styles.days}>
          <FlatList
            horizontal={true}
            data={this.state.data}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.listitems}>
                  <Text style={styles.text}>{item.day}</Text>
                  <Text style={styles.text}>{item.Date}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayProgram: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',

    //justifyContent: 'center',
    //alignItems:"center",
  },

  star: {
    flex: 3.5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  days: {
    flex: 8,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    //alignItems:"center",
  },
  listitems: {
    backgroundColor: 'orange',
    // flex:1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    // height:100,
    width: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
