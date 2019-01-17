import React, { Component } from 'react';
import {View,Text, Button,FlatList,Image,TouchableOpacity,StyleSheet,ImageBackground} from 'react-native';


export default class ProgramDetails extends Component {

  render() {
    return (
      <ImageBackground 
        style={{flex:1,resizeMode:"cover"}}
                            source={{uri:"http://paperlief.com/images/gif-wallpaper-for-mobile-wallpaper-3.jpg"}}
                          
                          //source={{uri: this.props.navigation.state.params.face}}
                      >

              <View style={styles.trailer}>
                        
                    <Text style={styles.coming} >Trailer Coming Soon.......</Text>
              </View>

              <View style={styles.program}>
                    <View style={styles.channel}>
                        <Image
                              style={{flex:1,resizeMode:"contain"}}
                              source={{uri: this.props.navigation.state.params.face}}
                            />
                    </View>

                    <View style={styles.progTitle}>
                      <Text style={styles.progTitleText}>{this.props.navigation.state.params.Jo}</Text>

                      <View style={styles.progDetails}>
                        <Text style={styles.text2}>Yr 2015</Text>
                        <Text style={styles.text2}>Romance</Text>
                        <Text style={styles.text2}>Drama</Text>
                        <Text style={styles.text2}>Horror</Text>
                      </View>
                    </View>
                   
              </View>

              <View style={styles.description}>
                <Text style={styles.text}>Description Of eventual programmisfhnshfhsrjkfbkdghslkfksf</Text>
              </View>

              <View style={styles.cast}>
                <Text style={styles.text}>casting done byGoergeDe niroArnorldShuasi</Text>
              </View>

              <View style={styles.empty}>
                <Text>EMPTY BLACK  SPACE</Text>
              </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  mainform: {
    backgroundColor: 'red',
    flex: 1,
    // justifyContent:'flex-start',

    // alignItems:"center",
  },
coming:{color:"white", fontSize:20, position: "absolute", top:50},
  trailer: {
    flex: 4,
    //backgroundColor: 'green',
    //flex: 2,
    justifyContent: 'center',
  },

  program: {
   // backgroundColor: 'black',
    flexDirection:"row",
     flex: 1.5,
    //justifyContent: 'center',
  },

  channel: {
    flex: 1.5,
    backgroundColor: 'grey',

    // justifyContent: 'center',
    //alignItems:"center",
  },

  progTitle: {
      flex: 3,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  progDetails: {
    // flex: 7,
    
    flexDirection:"row",
    backgroundColor: 'grey',
    //alignSelf:"flex-end"
    //justifyContent: 'center',
    //alignItems:"center",
  },

  description: {
     flex: 3,
    backgroundColor: 'black',

     justifyContent: 'center',
    //alignItems:"center",
  },

  cast: {
    flex: 1,
    backgroundColor: 'pink',

    //justifyContent: 'center',
    //alignItems:"center",
  },

    empty: {
    flex: 1,
    backgroundColor: 'white',

    //justifyContent: 'center',
    //alignItems:"center",
  },
  text:{
    color:"white",
    fontSize:17,
  },
   text2:{
    color:"white",
    fontSize:13,
  },
   progTitleText:{
    color:"red",
    fontSize:20,
  }
});