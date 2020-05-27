import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';


function welcomeScreen ({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Tutorama</Text>
        
        <View style={{alignItems:"center", margin:30}}>
            <Text style={styles.tekst}>Don't have an account?</Text>
            <Button title="Sign Up" type="outline" style={styles.button} onPress ={() => navigation.navigate("SignUp")}></Button>
        </View>
        
        <View style={{alignItems:"center"}}>
            <Text style={styles.tekst}>Do have an account? Please Log In.</Text>
            <Button title="Log In" type="outline" style={styles.button} onPress={() => navigation.navigate("LogIn")}></Button>
        </View>

        </View>
    );
};

export default welcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "cornsilk",
    },

    title:{
        textAlign:"center",
        fontWeight:"bold",
        fontSize: 30,
        margin: 20,
    },
    button:{
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    tekst:{
        textAlign: "center",
        fontSize: 20,
    }
});