import React, {useState} from 'react';
import {
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {
    ListItem,
    Header
} from 'react-native-elements';

export function ProfileScreen () {
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
                containerStyle={{
                backgroundColor: 'white',
            }}
                centerComponent={{
                text: 'Personal Information',
                style: {
                    fontSize: 20,
                    fontWeight: '500'
                }
            }}/>
            <ScrollView style={styles.scroll}>
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.username}</Text>}
                    leftElement={<Text style={styles.elementText}>Username</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.firstname}</Text>}
                    leftElement={<Text style={styles.elementText}>First Name</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.lastname}</Text>}
                    leftElement={<Text style={styles.elementText}>Last Name</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.dob}</Text>}
                    leftElement={<Text style={styles.elementText}>Date of Birth</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.gender}</Text>}
                    leftElement={<Text style={styles.elementText}>Gender</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.address}</Text>}
                    leftElement={<Text style={styles.elementText}>Address</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.town}</Text>}
                    leftElement={<Text style={styles.elementText}>Town</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.country}</Text>}
                    leftElement={<Text style={styles.elementText}>Country</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.num}</Text>}
                    leftElement={<Text style={styles.elementText}>Phone Number</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.email}</Text>}
                    leftElement={<Text style={styles.elementText}>Email</Text>}
                    bottomDivider
                />
                <ListItem
                    style={styles.item}
                    rightElement={<Text style={styles.elementText}>{user.type}</Text>}
                    leftElement={<Text style={styles.elementText}>Type of account</Text>}
                    bottomDivider
                />
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
        width: '90%',
        marginLeft: '10%'
    },
    title: {
        fontSize: 18,
        backgroundColor: 'white',
    },
    scroll: {
        marginTop: 100,
        width: '100%',
        borderTopWidth: 0.2,
        borderTopColor: 'lightgray',
    },
    row: {
        width: '95%',
        marginRight: '5%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    elementText: {
        color: 'black',
        fontSize: 16,
    }
});