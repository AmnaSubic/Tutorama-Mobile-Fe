import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import React from 'react';
import Stack from './Stack';
import {createAppContainer} from 'react-navigation';

const screens = {
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-search' color={tintColor} size={25}/>
            )
        }
    },
    Classes: {
        screen: Stack,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-book' color={tintColor} size={25}/>
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name='ios-person' color={tintColor} size={25}/>
            )
        }
    }
}

const Tab = createBottomTabNavigator(screens, {
        tabBarOptions: {
            activeTintColor: 'rgb(10,132,255)',
            inactiveTintColor: 'gray',
        }
    }
);
export default createAppContainer(Tab);