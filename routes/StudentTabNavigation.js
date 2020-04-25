import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Ionicons} from "@expo/vector-icons";
import Search from "../screens/Search";
import Classes from "../screens/Classes";
import Profile from "../screens/Profile";
import React from "react";

const BottomTabNavigator = createBottomTabNavigator();

export function MyTabs() {
    return (
        <BottomTabNavigator.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Profile') {
                        iconName = 'ios-person';
                    } else if (route.name === 'Search') {
                        iconName = 'ios-search';
                    } else if (route.name === 'Classes') {
                        iconName = 'ios-book'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'rgb(10,132,255)',
                inactiveTintColor: 'gray',
            }}>
            <BottomTabNavigator.Screen name="Search" component={Search} />
            <BottomTabNavigator.Screen name="Classes" component={Classes} />
            <BottomTabNavigator.Screen name="Profile" component={Profile} />
        </BottomTabNavigator.Navigator>
    );
}