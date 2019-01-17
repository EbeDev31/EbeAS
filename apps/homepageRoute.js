import React, { Component } from 'react';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';

//Screen required in Router
import Meteo from "./weather/weatherApp";
import Tv from "./tv/tvApp";
import Other from "./other/otherApp";



export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
      )
  }
}

const MainStack = createBottomTabNavigator(

  {
    TV:{ screen: Tv
      
    },

    Meteo:{ screen: Meteo
      
    },

    Other:{ screen: Other
      
    }
  }

);


const AppContainer=createAppContainer(MainStack);
