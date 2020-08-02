import React from 'react';
import {View} from 'react-native';
import {CreateAppContainer} from "react-navigation"
import {CreateBottomTabNavigator} from "react-navigation-tabs"
import{Feather} from "@expo/vector-icons"
import instantlogin from './App/screens/InstantLogin.js';

import{reportscreen,optionscreen} from "./App/screens/Home.js";

const TabNavigator = CreateBottomTabNavigator(


    {
      report: {
        screen:reportscreen,
        navigationOptions: {
          tabBarIcon: () => <Feather name="info" size={24} color="#FFFF00" />
        }
    
      }
    
    },
   

    },
    option:{
    screen:optionscreen
    navigationOptions: {
      tabBarIcon: () => <Feather name="edit" size={24} color="#66CD9D" />
    }
    },
 {
tabBarOptions: {
  showLabel: false
}
  }
  
);





export default function App() {
 
 
  
  return<instantlogin/>

}
   
      
      

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? 20 : 0,
  }});
  