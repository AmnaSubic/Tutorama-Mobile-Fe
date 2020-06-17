import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Class from '../screens/Class';
import Classes from '../screens/Classes';
import Tutor from "../screens/Tutor";

const screens = {
    Classes: {
        screen: Classes,
        navigationOptions: {
            headerShown: false
        }
    },
    Class: {
        screen: Class
    },
    Tutor: {
        screen: Tutor
    }
};

const Stack = createStackNavigator(screens);
export default Stack;

