import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import {
    Header,
    ListItem
} from 'react-native-elements';


export default function Classes ({navigation}) {
    const [classes, setClasses] = useState([
        {
            subject: 'Math',
            tutor: 'John Doe',
            place: 'Falcon Street 12',
            date: '12/05/2020',
            start_time: '17:00',
            end_time: '18:30',
            price: '15',
            key: '1'
        },
        {
            subject: 'Physics',
            tutor: 'Jane Doe',
            place: 'Downtown Street 22',
            date: '30/04/2020',
            start_time: '10:00',
            end_time: '11:00',
            price: '10',
            key: '2'
        },
        {
            subject: 'Chemistry',
            tutor: 'John Doe',
            place: 'Lorem Ipsum 123',
            date: '11/05/2020',
            start_time: '11:00',
            end_time: '13:00',
            price: '30',
            key: '3'
        },
        {
            subject: 'German',
            tutor: 'Greta Schwarz',
            place: 'Strawberry Street 1',
            date: '10/05/2020',
            start_time: '12:00',
            end_time: '12:30',
            price: '20',
            key: '4'
        }
    ]);

    return (
            <SafeAreaView style={styles.container}>
                <Header
                    placement='left'
                    containerStyle={{
                        backgroundColor: 'white',
                        width: '100%'
                    }}

                    centerComponent={
                        <Text style={styles.title}>Classes</Text>
                    }
                />
                <FlatList
                    style={styles.list}
                    data={classes}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Class', item)}>
                            <ListItem
                                style={styles.item}
                                leftElement={<Text>{item.subject}</Text>}
                                rightElement={<Text>{item.date}</Text>}
                                chevron
                                bottomDivider
                            />
                        </TouchableOpacity>
                    )}
                />
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
    item: {
        width: '100%'
    },
    list: {
        width: '100%'
    }
});