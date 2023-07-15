import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity ,Linking} from 'react-native';

import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import News from '../Screens/News';
import DetailsScreen from '../Screens/Details';
import HomeScreen from '../Screens/Home';


const Tab = createBottomTabNavigator();
const BottomBar = () => {
    
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}   tabBar={(props) => (
      <BottomTabBar
        {...props}
        style={{ height: 100 }}
      />
    )}
  > 
      <Tab.Screen name="Market" component={HomeScreen} options={{TabBarIcon : ({focused}) => (
        focused?  <Icon name="search"  color='blue' size={60} /> : <Icon name="home"  color='#020303' size={60} />
      )}} />
      <Tab.Screen name="Portfolio" component={DetailsScreen} options={{TabBarIcon : ({focused}) => (
        focused?  <Icon name="home"  color='blue' size={60} /> : <Icon name="home"  color='#020303' size={60} />
      )}} />
      <Tab.Screen name="News" component={News} options={{TabBarIcon : ({focused}) => (
        focused?  <Icon name="home"  color='blue' size={60} /> : <Icon name="home"  color='#020303' size={60} />
      )}} />
      
    </Tab.Navigator>


  )
}

export default BottomBar