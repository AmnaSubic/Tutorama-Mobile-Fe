import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView
} from 'react-native';
import {
    ListItem,
    Header,
    Avatar, Icon
} from 'react-native-elements';
import AvatarPhoto from '../../assets/Avatar.jpeg'

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
                    width: '100%',
                }}
                centerComponent={
                    <Text style={styles.title}>{user.type} Profile</Text>
                }
                rightComponent={{
                    text: 'Edit',
                    style: {
                        fontSize: 20,
                        color: 'rgb(10,132,255)',
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
        fontSize: 20,
    },
    list: {
        width: '100%',
        borderTopWidth: 0.2,
        borderTopColor: 'lightgray',
        marginBottom: 50,
    },
    elementText: {
        color: 'black',
        fontSize: 16,
    },
    back: {
        fontSize: 20,
        color: 'rgb(10,132,255)',
    },
    scroll: {
        width: '100%',
    }
});