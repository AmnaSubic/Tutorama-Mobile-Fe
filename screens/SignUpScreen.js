import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

function SignUp({navigation}){

    const [sifra, setSifra] = useState();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Join Us!</Text>
            <Text style={styles.tekst}>Create an account:</Text>
            <Text>Username:</Text>
            <Input placeholder="Username"></Input>
            <Text>Password:</Text>
            <Input placeholder="Password" onChange={(e) => setSifra(e.nativeEvent.text)}></Input>
            <Button title="Sign Up" type="outline" style={styles.button} onPress={()=>navigation.navigate("LogIn", {pass:sifra})}></Button>
        </View>
    );
};

export default SignUp;

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