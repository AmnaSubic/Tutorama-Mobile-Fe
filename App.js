import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    ProgressViewIOS
} from 'react-native';
import Logo from './assets/TutoramaLogo.png';
import { ProfileScreen } from './screens/profile/Profile';
import { SearchScreen } from './screens/search/Search';
import { ClassesScreen } from './screens/classes/Classes';
import { Ionicons } from '@expo/vector-icons';

function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.h1}>Welcome to Tutorama.ba</Text>
                <Text style={styles.h2}>Bosnia and Herzegovina's first tutoring web application.</Text>
            </View>
            <View style={styles.middleContainer}>
                <Image source={Logo} style={styles.image}/>
            </View>
            <ProgressViewIOS number={1} />
            <View style={styles.bottomContainer}>
                <View style={styles.buttonContainer}>
                    <Button
                        title={"Register"}
                        style={styles.button}
                        onPress={() => this.onPress()}
                        color="#fff"
                    />
                </View>
                <View style={styles.hyperlinkContainer}>
                    <Text style={styles.text}>Already a user?</Text>
                    <Text style={styles.hyperlink} onPress={() => this.onPress()}>Login</Text>
                </View>
          </View>
        </View>
      ); 
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
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
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Classes" component={ClassesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App(){
    const isLoggedIn = true;
    return (
        <NavigationContainer>
          {isLoggedIn ? <MyTabs /> : Login()}
        </NavigationContainer>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        color: '#0c424d',
        fontSize: 40,
    },
    h2: {
        color: '#111922',
        fontSize: 18,
        marginTop: 8,
    },
    image: {
        width: 300,
        height: 380,
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: '#0c424d',
        borderRadius: 5,
        padding: 8,
        margin: 8,
    },
    topContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    bottomContainer: {
        justifyContent: 'flex-end',
        width: '90%',
        height: '20%',
        margin: 20,
        padding: 10,
    },
    text: {
        paddingLeft: 80,
        flex: 4,
    },
    hyperlink: {
        color: '#0c424d',
        flex: 4,
    },
    hyperlinkContainer: {
        textAlign: 'center',
        flex: 4,
        flexDirection: 'row',
        padding: 10,
    },
});

