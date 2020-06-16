import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {Input, Button} from 'react-native-elements';

export default function SignUpScreen({navigation}){

    const [sifra, setSifra] = useState();

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Join Us!</Text>
            <Text style={styles.tekst}>Create an account:</Text>
            <Text>Username:</Text>
            <Input placeholder="Username"/>
            <Text>Password:</Text>
            <Input placeholder="Password" onChange={(e) => setSifra(e.nativeEvent.text)}/>
            <Button title="Sign Up" type="outline" style={styles.button} onPress={() => navigation.navigate('WelcomeScreen')}/>
        </SafeAreaView>
    );
};

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
        marginTop: 20,
    }
});