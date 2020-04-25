import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LandingPage } from "./screens/LandingPage";
import { MyTabs } from "./routes/StudentTabNavigation";

export default function App(){
    const isLoggedIn = true;
    return (
            <NavigationContainer>
                {isLoggedIn ? <MyTabs /> : LandingPage()}
            </NavigationContainer>
      );
}

