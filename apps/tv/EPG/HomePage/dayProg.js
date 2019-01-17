import React, { Component } from 'react';
import {View,Text, Button,FlatList,Image,TouchableOpacity,StyleSheet,BackHandler} from 'react-native';

import { daydd } from './jsonData';
import { daydate } from './jsonData';
import { channels } from './jsonData2';
import { withNavigation, } from 'react-navigation';

 class DayProg extends Component {
  constructor(props) {
    super(props);

    this.state = {
                
                chanImage:this.props.chanImg,
               whichChannel : this.props.schedules,
            };
     }

timeExtractor=(time)=>{
    let realTime="";
    //2018-12-11T13:00:00+01:00
    realTime=time.substring(11,16);
    return realTime;
}


  render() {
    return (
      <View style={styles.dayProgram}>
        <View style={styles.programs}>
          <FlatList
            //style={styles.listitems}
            horizontal={true}
            data={this.state.whichChannel}

             keyExtractor={(index) => index.toString()}
             renderItem={({ item, index }) => {
                return (
                               <TouchableOpacity
                               // when this module is used individually, the below statement allows you to navigate to the ProgDetails Screen
                               //onPress={() => this.props.navigation.navigate('progPage')}//
                                     style={styles.listitems}
                                     onPress={() => {
                                            this.props.navigation.navigate(
                                              'ProgDetails',
                                              {
                                                Jo:item.title,
                                                face:this.state.chanImage
                                                });
                                          }}>
                                     <Text style={styles.text}>{item.title}</Text>
                                     <Text style={styles.text}>{this.timeExtractor(item.start)}-
                                     {this.timeExtractor(item.end)}</Text>
                               </TouchableOpacity>
                             );
              }}

          />
        </View>
      </View>
    );
  }
}

export default withNavigation(DayProg);
const styles = StyleSheet.create({
  dayProgram: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'blue',

    //justifyContent: 'center',
    //alignItems:"center",
  },

  channel: {
    flex: 3.5,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  programs: {
    flex: 8,
    backgroundColor: 'pink',
    justifyContent: 'center',
    //alignItems:"center",
  },
  listitems: {
    backgroundColor: '#38686A',
    // flex:1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    // height:100,
    width: 100,
    alignItems: 'center',
  },
  text: {
     fontSize: 15,
    color: 'white',
   // resizeMode:"contain",
   // textBreakStrategy:"simple",
  },
});
