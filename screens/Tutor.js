import React, {useEffect, useState} from "react";
import {ActivityIndicator, SafeAreaView, Text} from "react-native";
import {Card, ListItem} from "react-native-elements";

export default function Tutor({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [tutor, setTutor] = useState({
        tutor_ID: null,
        name: null,
        surname: null,
        dob: null,
        gender: null,
        address: null,
        town: null,
        country: null,
        phone: null,
        email: null
    });

    useEffect(() => {
        fetch('http://localhost:3000/dev/tutor/' + navigation.getParam('tutor'))
            .then((response) => response.json())
            .then((json) => setTutor(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <SafeAreaView>
            {isLoading ? <ActivityIndicator/> : (
                <Card
                    title={'Tutor Information'}>
                    <ListItem
                        leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Name</Text>}
                        rightElement={<Text style={{fontWeight: '500'}}>{tutor.name} {tutor.surname}</Text>}
                    />
                    <ListItem
                        leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Date Of Birth</Text>}
                        rightElement={<Text style={{fontWeight: '500'}}>{tutor.dob}</Text>}
                    />
                    <ListItem
                        leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Gender</Text>}
                        rightElement={<Text style={{fontWeight: '500'}}>{tutor.gender ? 'Male' : 'Female'}</Text>}
                    />
                    <ListItem
                        leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Town</Text>}
                        rightElement={<Text style={{fontWeight: '500'}}>{tutor.town}</Text>}
                    />
                    <ListItem
                        leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Country</Text>}
                        rightElement={<Text style={{fontWeight: '500'}}>{tutor.country}</Text>}
                    />
                    <ListItem
                        leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Phone</Text>}
                        rightElement={<Text style={{fontWeight: '500'}}>{tutor.phone}</Text>}
                    />
                    <ListItem
                        leftElement={<Text style={{color: 'rgb(142,142,147)'}}>Email</Text>}
                        rightElement={<Text style={{fontWeight: '500'}}>{tutor.email}</Text>}
                    />
                </Card>
            )}
        </SafeAreaView>
    );
}