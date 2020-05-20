import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView, ActivityIndicator
} from 'react-native';
import {
    ListItem,
    Header,
    Avatar
} from 'react-native-elements';
import AvatarPhoto from '../assets/Avatar.jpeg'
import { SafeAreaView } from 'react-navigation';

export default function Profile () {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dev/users/1')
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
                <View style={styles.view}>
                    <Header
                        placement='left'
                        containerStyle={{
                            backgroundColor: 'white',
                            width: '100%'
                        }}
                        centerComponent={
                            <Text style={styles.title}>{data.tutor ? 'Tutor' : 'Student'} Profile</Text>
                        }
                        rightComponent={{
                            text: 'Edit',
                            style: {
                                fontSize: 20,
                                color: 'rgb(0,122,255)',
                            },
                        }}
                    />
                    <ScrollView style={styles.scroll}>
                        <Avatar
                            size={100}
                            containerStyle={{
                                alignSelf:'center',
                                marginTop: 50,
                                marginBottom: 50
                            }}
                            rounded
                            title={'AS'}
                            source={AvatarPhoto}
                        />
                        <View style={styles.list}>
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>First Name</Text>}
                                rightElement={<Text style={styles.dataText}>{data.firstname}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Last Name</Text>}
                                rightElement={<Text style={styles.dataText}>{data.lastname}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Date of Birth</Text>}
                                rightElement={<Text style={styles.dataText}>{data.dob}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Gender</Text>}
                                rightElement={<Text style={styles.dataText}>{data.gender ? 'Male' : 'Female'}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Address</Text>}
                                rightElement={<Text style={styles.dataText}>{data.address}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Town</Text>}
                                rightElement={<Text style={styles.dataText}>{data.town}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Country</Text>}
                                rightElement={<Text style={styles.dataText}>{data.country}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Phone Number</Text>}
                                rightElement={<Text style={styles.dataText}>{data.phone}</Text>}
                                bottomDivider
                            />
                            <ListItem
                                style={styles.item}
                                leftElement={<Text style={styles.elementText}>Email</Text>}
                                rightElement={<Text style={styles.dataText}>{data.email}</Text>}
                                bottomDivider
                            />
                        </View>
                    </ScrollView>
                </View>
            )}
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
    view: {
      width: '100%'
    },
    item: {
        width: '95%',
        marginLeft: '5%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    list: {
        width: '100%',
        borderTopWidth: 0.2,
        borderTopColor: 'lightgray',
        marginBottom: 50,
    },
    elementText: {
        color: 'rgb(142,142,147)',
    },
    dataText: {
        color: 'black',
        fontWeight: '500',
    },
    scroll: {
        width: '100%',
    }
});