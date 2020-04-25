import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function ClassesScreen () {
    return (
        <View style={styles.container}>
            <Text>Menu</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});