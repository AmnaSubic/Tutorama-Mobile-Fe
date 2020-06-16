import React from 'react';
import StudentTabNavigation from './routes/StudentTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import LoginRegisterStack from './routes/LoginRegisterStack';
import {useState} from 'react';

export default function App(){
   let isLoggedIn = true;
    //if (val===true) isLoggedIn = true;
    return (
            <NavigationContainer>
               {isLoggedIn ? <StudentTabNavigation/> : <LoginRegisterStack/>}
            </NavigationContainer>
      );
}