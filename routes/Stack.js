import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import Class from '../screens/Class';
import Classes from '../screens/Classes';

const screens = {
    Classes: {
        screen: Classes,
        navigationOptions: {
            headerShown: false
        }
    },
    Class: {
        screen: Class
    }
};

const Stack = createStackNavigator(screens);
export default Stack;


/*const Stack = createStackNavigator();

export default function ClassStackNavigation() {
    return(
        <Stack.Navigator initialRouteName='Classes'>
            <Stack.Screen name='Classes' component={Classes} options={{headerShown: false}}/>
            <Stack.Screen name='Class' component={Class}/>
        </Stack.Navigator>
    );
}*/