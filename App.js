import React from 'react';
import StudentTabNavigation from './routes/StudentTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
//import {LandingPage} from './screens/LandingPage';

import WelcomePage from './screens/WelcomeScreen.js';


export default function App(){
    const isLoggedIn = false;
    return (
            <NavigationContainer>
               {isLoggedIn ? <StudentTabNavigation/> : WelcomePage()}
            </NavigationContainer>
      );
}