import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function Classes ({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Classes</Text>
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