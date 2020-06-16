import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import WelcomeScreen from '../screens/WelcomeScreen';
import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {createAppContainer} from 'react-navigation';

const screens = {
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    LoginScreen: {
        screen: LogInScreen
    },
    SignUpScreen: {
        screen: SignUpScreen
    }
};

const Stack = createStackNavigator(screens);
export default createAppContainer(Stack);

