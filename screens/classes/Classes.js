import React from 'react';
import {
    View,
    Text,
    StyleSheet, Button
} from 'react-native';

<<<<<<< HEAD:screens/classes/Classes.js
export default function Classes ({navigation}) {

=======
export default function ClassesScreen () {
>>>>>>> 9807e98e3cba08e1e80ee646901c47b9685f6d54:screens/Classes.js
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