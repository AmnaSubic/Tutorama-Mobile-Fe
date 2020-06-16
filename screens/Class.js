import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import {
    Button,
    Card,
    ListItem
} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


export default function Class({navigation}) {
    let statusColor;
    if (navigation.getParam('status') === 'Rejected')
        statusColor = 'rgb(255,59,48)'
    else if (navigation.getParam('status') === 'Cancelled')
        statusColor = 'rgb(255,149,0)'
    else if (navigation.getParam('status') === 'Accepted')
        statusColor = 'rgb(52,199,89)'
    else if (navigation.getParam('status') === 'Approval pending')
        statusColor = 'rgb(88,86,214)'
    else
        statusColor = 'rgb(142,142,147)'

    return (
        <SafeAreaView style={styles.container}>
            <Card
                containerStyle={styles.card}
                title={navigation.getParam('name')}>
                <ListItem
                    leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Tutor</Text>}
                    rightElement={<Text style={{fontWeight: '500'}}>{navigation.getParam('name')} {navigation.getParam('surname')}</Text>}
                />
                <ListItem
                    leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Date</Text>}
                    rightElement={<Text style={{fontWeight: '500'}}>{navigation.getParam('date')}</Text>}
                />
                <ListItem
                    leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Start Time</Text>}
                    rightElement={<Text style={{fontWeight: '500'}}>{navigation.getParam('start')}</Text>}
                />
                <ListItem
                    leftElement={<Text style={{color: 'rgb(142,142,147)'}}>End Time</Text>}
                    rightElement={<Text style={{fontWeight: '500'}}>{navigation.getParam('end')}</Text>}
                />
                <ListItem
                    leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Address</Text>}
                    rightElement={<Text style={{fontWeight: '500'}}>{navigation.getParam('place')}</Text>}
                />
                <ListItem
                    leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Price</Text>}
                    rightElement={<Text style={{fontWeight: '500'}}>{navigation.getParam('price')} KM</Text>}
                />
                <ListItem
                    leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Status</Text>}
                    rightElement={<Text style={{fontWeight: '500', color: statusColor}}>{navigation.getParam('status')}</Text>}
                />
                {navigation.getParam('status') === 'accepted'
                ? <View style={styles.buttonContainer}>
                    <Button
                        type='outline'
                        titleStyle={[styles.buttonTitle, { color: 'rgb(52,199,89)'}]}
                        title='Class Held   '
                        buttonStyle={[styles.finishedButton, styles.button]}
                        icon={<Ionicons name='ios-checkmark' size={20} color='rgb(52,199,89)'/>}
                        iconRight
                        onPress={() => navigation.setParams({status: 'finished'})}
                    />
                    <Button
                        type='outline'
                        titleStyle={[styles.buttonTitle, {color: 'rgb(255,59,48)'}]}
                        title='Cancel Class  '
                        buttonStyle={[styles.cancelledButton, styles.button]}
                        icon={<Ionicons name='ios-close' size={20} color='rgb(255,59,48)' />}
                        iconRight
                        onPress={() => navigation.setParams({status: 'cancelled'})}
                    />
                </View>
                : <Text> </Text>
                }
            </Card>
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
    card: {
        width: '95%',
    },
    buttonTitle: {
        fontSize: 15
    },
    button: {
       width: '80%',
       borderRadius: 5,
       borderWidth: 1,
       height: 40,
    },
    finishedButton: {
        borderColor: 'rgb(52,199,89)',
    },
    cancelledButton: {
        borderColor: 'rgb(255,59,48)',
    },
    buttonContainer: {
        width: '100%',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 40,
    }
});