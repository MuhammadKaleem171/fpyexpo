import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import {NavigationContainer} from '@react-navigation/native'
 import MainScreen from './Screens/MainScreen';
 import TeacherLogIn from './Screens/Teacher/TeacherLogin.js';
 import StLogin from './StLogIn';
 import StudentLogin from './Student/StudentLogin';
import {createStackNavigator} from '@react-navigation/stack'
import QueryBuilder from './Student/QueryBuilder';
import ExecuteQuery from './Student/ExecuteQuery';
import LabList from './Student/LabList';
import Select_Clause from './Student/QScreen/Select_Clause';
import Arithmetic from './Student/QScreen/Arithmetic';
import Concatenation from './Student/QScreen/Concatenation';
import OrderBy from './Student/QScreen/OrderBy';
import Logical_operators from './Student/QScreen/Logical_operators';




const Stack = createStackNavigator();
const Stack1 = createStackNavigator();

const My=()=>{
  return(
    <Stack1.Navigator >
      <Stack1.Screen name="Student" component={StudentLogin}/>
      <Stack1.Screen name="Labs" component={LabList} />
      <Stack1.Screen name="Select" component={Select_Clause} />
      <Stack1.Screen name="Arithmetic" component={Arithmetic}/>
      <Stack1.Screen name="Concatenation" component={Concatenation}/>
      <Stack1.Screen name="OrderBy" component={OrderBy}/>
      <Stack1.Screen name="Logical_operators" component={Logical_operators}/>





      <Stack1.Screen name="query" component={QueryBuilder}/>
  
      <Stack1.Screen name="ExQuery" component={ExecuteQuery}/>
    </Stack1.Navigator>
  )

}
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen}/>
      <Stack.Screen  options={{headerShown: false}} name="Stu" component={My}/>
      <Stack.Screen name="Teacher" component={TeacherLogIn}/>
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}


