import React, { Component } from 'react';
import {View,Text, Button,FlatList,Image,TouchableOpacity,StyleSheet,} from 'react-native';

import { daydd } from './jsonData';
import DayProg from './dayProg';

import { channels } from './jsonData2';
import { withNavigation, } from 'react-navigation';
import ProgDetails from '../ProgPage/progPage';




let indexChan= 0;
console.log("Length Number");
console.log(indexChan);

class DaySchedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
                canali:channels
              //canali:this.props.allChannels,
              //chanLength:this.props.allChannels.length,
            };
     }

/* componentDidMount() {
    this.getChannels();
  }*/

/**
 * This fucnctoin is in charge of Fetching 
 * the channels Api 
 *
 */
 getChannels=()=> {

   fetch("http://192.168.68.105:1337/epg")
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson.channels);
       this.setState({
                   canali : responseJson.channels
                  });
        
    })
    .catch((error) => {
      console.error(error);
    });
}



  creatSked=(item)=>{

   // const {navigate}= this.props.navigation;
   //navigate={navigate}
   let chanNumber=indexChan;
    indexChan=indexChan+1;
         return(
             <DayProg schedules={item.schedules} chanImg={item.images.logo} />
          )
  }


  render() {

   // const {navigate}= this.props.navigation;
    return (
        <View style={styles.programs}>
          <FlatList
            //style={styles.listitems}
            //horizontal={true}
            data={this.state.canali}
           // data={channels}

            keyExtractor={(index) => index.toString()}
            renderItem={({ item, index }) => { 
             return (
                    <View style={styles.dayProgram}>
                      <View style={styles.channel}>
                          <Image
                              style={{flex:1,resizeMode:"contain"}}
                              source={{uri: item.images.logo}}
                            />
                      </View>
                       <View style={styles.programs}>
                          {this.creatSked(item)}
                       </View>
                    </View>
              );
                                             
              }}

          />
        </View>
    );
  }
}
 export default withNavigation(DaySchedule);

const styles = StyleSheet.create({
  dayProgram: {
    flex: 1,
    height:100,
    flexDirection: 'row',
    backgroundColor: 'blue',

    //justifyContent: 'center',
    //alignItems:"center",
  },

channel: {
    flex: 3.5,
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor: 'grey',
    justifyContent: 'center',
   // alignItems: 'center',
    borderBottomWidth:1,
  },

  programs: {
    flex: 8,
    backgroundColor: 'green',
    justifyContent: 'center',
    //alignItems:"center",
  },

  listitems: {
    backgroundColor: 'orange',
    flex:1,
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
    // height:100,
   // width: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    color: 'white',
  },
});
