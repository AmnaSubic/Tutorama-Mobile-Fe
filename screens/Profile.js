import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import {
    ListItem,
    Header,
    Avatar
} from 'react-native-elements';
import AvatarPhoto from '../assets/Avatar.jpeg'
import { SafeAreaView } from 'react-navigation';

export default function Profile () {
    const [user, setUser] = useState({
        username: 'amnasubic',
        firstname: 'Amna',
        lastname: 'Subic',
        dob: '05/04/1998',
        gender: 'Female',
        address: 'Lorem Ipsum 123',
        town: 'Dolor',
        country: 'Amet',
        num: '+387 62 123 456',
        email: 'amna.subic@lorem.com',
        type: 'Student'
    })
    return (
        <SafeAreaView style={styles.container}>
            <Header
                placement='left'
                containerStyle={{
                    backgroundColor: 'white',
                    width: '100%'
                }}

                centerComponent={
                    <Text style={styles.title}>{user.type} Profile</Text>
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
                        leftElement={<Text style={styles.elementText}>Username</Text>}
                        rightElement={<Text style={styles.dataText}>{user.username}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>First Name</Text>}
                        rightElement={<Text style={styles.dataText}>{user.firstname}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Last Name</Text>}
                        rightElement={<Text style={styles.dataText}>{user.lastname}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Date of Birth</Text>}
                        rightElement={<Text style={styles.dataText}>{user.dob}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Gender</Text>}
                        rightElement={<Text style={styles.dataText}>{user.gender}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Address</Text>}
                        rightElement={<Text style={styles.dataText}>{user.address}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Town</Text>}
                        rightElement={<Text style={styles.dataText}>{user.town}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Country</Text>}
                        rightElement={<Text style={styles.dataText}>{user.country}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Phone Number</Text>}
                        rightElement={<Text style={styles.dataText}>{user.num}</Text>}
                        bottomDivider
                    />
                    <ListItem
                        style={styles.item}
                        leftElement={<Text style={styles.elementText}>Email</Text>}
                        rightElement={<Text style={styles.dataText}>{user.email}</Text>}
                        bottomDivider
                    />
                </View>
            </ScrollView>
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