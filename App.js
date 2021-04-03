import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen'
import Trending from './src/screens/Trending'
const navigator = createStackNavigator(
  {
   
  Home:{screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerShown: false
    },
},
  
  Trending: Trending
  },
  {

    initialRouteName: 'Home',
  
  defaultNavigationOptions:{
    headerShown: false
  }
  
     
    }
  
);                                            

export default createAppContainer(navigator);
