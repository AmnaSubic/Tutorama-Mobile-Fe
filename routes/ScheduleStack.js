import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Search from "../screens/Search";
import Service from "../screens/Service";
import Schedule from "../screens/Schedule";
import Tutor from "../screens/Tutor";

const screens = {
    Search: {
        screen: Search,
        navigationOptions: {
            headerShown: false
        }
    },
    Service: {
        screen: Service
    },
    Schedule: {
        screen: Schedule
    }
};

const ScheduleStack = createStackNavigator(screens);
export default ScheduleStack;

