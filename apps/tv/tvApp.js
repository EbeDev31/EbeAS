  /**
 * EPG App
 *
 *This Router component serves as 
 *the main entry point to the App
 * @flow
 *
 *
 *Root of the App uses a BottomTabNavigator which holds a :
 *
 ***StackNavigator which wraps the main Screen 
 *
 
 */
import * as React from 'react';
import {View,Text, Button,FlatList,TextInput,TouchableOpacity,StyleSheet,} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Home from './EPG/home';
import ProgDetails from './EPG/ProgPage/progPage';
import Options from './profile';


const HomeStack = createStackNavigator(
 { //Screens
    sked: {
            screen: Home,
              navigationOptions: () => ({
              // header:null,
             }),
      },
    
    ProgDetails : {
              screen :ProgDetails,
              navigationOptions: () => ({
                headerTransparent: true, 
                     // header:null,
                    }),
        },

 Options: {
            screen: Options,
              navigationOptions: () => ({
              // header:null,
             }),
      },
  },

  { //Default Navigation Options
   
   /* defaultNavigationOptions: {
        headerTitle:(
                    <Header/>
                ),
       // headerTransparent: true, 
        headerStyle:
         {style:{
                 // position: 'absolute',
                  backgroundColor: 'red', 
                 
            } 
        },
    },*/

  }
  
  
);


// Container of wrapper
const AppContainer = createAppContainer(HomeStack);

export default class App extends React.Component {
  componentDidMount () {
     //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
}
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    //horizontal:true,
    // margin:-0,
    backgroundColor: 'green',
    // alignItems: 'center',
  },
  transparentHeader: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
});
