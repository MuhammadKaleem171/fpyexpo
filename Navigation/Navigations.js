import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StudentLogin from '../Student/StudentLogin';
import MainScreen from '../Screens/MainScreen.js';
import TeacherLogIn from '../Screens/Teacher/TeacherLogin';

const Stack = createStackNavigator();

const Mynavigation=()=>{
    return(
        <Stack.Navigator 
        initialRouteName='MainSreen'>
           {/* // <Stack.Screen name="MainScreen" componenrt={MainScreen}/> */}

            <Stack.Screen name='student' componenrt={StudentLogin}
            options={
                ({navigation})=>({
                    title:'Student',
                })
            }/>
            <Stack.Screen name="Teacher" componenrt={TeacherLogIn}/>
            
            
        </Stack.Navigator>
    )

}

export default Mynavigation;