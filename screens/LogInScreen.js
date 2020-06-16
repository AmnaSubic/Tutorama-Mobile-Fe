import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import App from "../App";

export default function LogInScreen ({navigation, route}){

    //const {pass} = route.params;

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Log In to your account:</Text>

            <Text>Enter Username:</Text>
            <Input placeholder="Username" onChange={(e) => setUsername(e.nativeEvent.text)}/>

            <Text>Enter Password:</Text>
            <Input placeholder="Password" onChange={(e) => setPassword(e.nativeEvent.text)}/>

            <Button title="Log In" type="outline" style={styles.button}

            onPress={() => {username === "Orhan" && password ==="Test123" ? App(true) : alert("Wrong Credentials, Try Again.")
            }}

           
           /* onPress={() => {if(username === "Pyro98" && password === pass){
            navigation.navigate("Welcome")
        }else{alert("Wrong Credentials, Try Again.")}
        }}
    */
            />
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