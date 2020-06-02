import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';


export default function welcomeScreen({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Tutorama</Text>
        
        <View style={{alignItems:'center', margin:30}}>
            <Text style={styles.text}>Don't have an account?</Text>
            <Button title='Sign Up' type='outline' style={styles.button} onPress ={() => navigation.navigate('SignUp')}/>
        </View>
        
        <View style={{alignItems:'center'}}>
            <Text style={styles.text}>Do have an account? Please Log In.</Text>
            <Button title='Log In' type='outline' style={styles.button} onPress={() => navigation.navigate('LogIn')}/>
        </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cornsilk',
    },

    title:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 30,
        margin: 20,
    },
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text:{
        textAlign: 'center',
        fontSize: 20,
    }
});