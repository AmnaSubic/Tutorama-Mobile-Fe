import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {
    StyleSheet,
    Text
} from 'react-native';
//import {Header} from 'react-native-elements';


export default function Class({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{navigation.getParam('subject')}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
});