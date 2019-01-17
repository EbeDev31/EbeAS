import React, { Component } from 'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import {Icon} from "native-base"; 

import {optionData} from "../assets/data/jsonData"


export default class Profile extends Component {

  render() {
    return (


        <View style={styles.mainform}>
          <FlatList
            //style={styles.listitems}
           // horizontal={true}
             ItemSeparatorComponent={() => (
              <View style={styles.separator} />
              )}
            data={optionData}
            keyExtractor={(item) => item.name}
             renderItem={({ item,}) => {
                return (
                           <TouchableOpacity style={styles.options} 
                            onPress={
                              ()=>{
                                this.props.navigation.navigate(item.nav)

                              }}
                           >
                               <Icon name={item.icon}

                               style={{marginHorizontal:14}}/>
                               <Text>{item.name}</Text>
                           </TouchableOpacity>
                        );
              }}

          />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  mainform: {
    backgroundColor: 'white',
    flex: 1,
    // justifyContent:'flex-start',

    // alignItems:"center",
  },
separator:{
    height:1,
    width:"86%",
    backgroundColor:"red",
    marginLeft:"3%",
  },
  options: {
    flex: 1,
    flexDirection:"row",
    justifyContent:'flex-start',
    alignItems:"flex-end",
    height:70,
    paddingBottom:10,
    //backgroundColor: 'gray',
  },
  text: {
      fontSize:20,
      color:"black",
  },

});