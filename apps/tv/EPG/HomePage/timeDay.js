import React,{Component} from "react";
import {View,Text,Button,FlatList,TextInput,TouchableOpacity,StyleSheet} from "react-native";


export default class TimeOfDay extends Component{

  constructor(props){

    super(props);

    this.state={
      data:["14:00","15:00","16:00","17:00"],
    }

   // this.renderItem=this.renderItem.bind(this);

  }


renderItem(data) {
   let { item} = data;
  return (
    <TouchableOpacity style={styles.listitems}>
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  ) 
}

	render(){

			return(

        <View style={styles.days}>
                    <FlatList

                  // style={styles.listitems}
                        horizontal={true}
                        data={this.state.data}
                        keyExtractor={(item)=>item}
                        renderItem={this.renderItem.bind(this)}
                    />
         </View>
  
				);
			}

}

const styles = StyleSheet.create({

 

  listitems:{
      backgroundColor: 'orange',
      flex:1,
     justifyContent: 'center',
     borderColor:"red",
     borderWidth:1,
    // height:100,
     width:200,
    alignItems:"center",
  },
  days:{
    flex: 1,
    backgroundColor: 'yellow',
    // justifyContent: 'center',
    //alignItems:"center",
  },
  text:{
    fontSize:50,
    color:"white",
  }
});