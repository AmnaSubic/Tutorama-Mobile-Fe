import React from 'react';
import StudentTabNavigation from './routes/StudentTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import {LandingPage} from './screens/LandingPage';


export default function App(){
    const isLoggedIn = true;
    return (
            <NavigationContainer>
                {isLoggedIn ? <StudentTabNavigation/> : LandingPage()}
            </NavigationContainer>
      );
}