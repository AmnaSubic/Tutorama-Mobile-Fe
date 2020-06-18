import React, {useState} from "react";
import {DatePickerIOS, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import {Button, ListItem} from 'react-native-elements';
import moment from "moment";

export default function Schedule({navigation}) {
    const [service, setService] = useState(navigation.getParam('service_ID'));
    const [student, setStudent] = useState(2);
    const [price, setPrice] = useState(0);
    const [place, setPlace] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const save = () => {
        fetch('http://localhost:3000/dev/classes/add', {method: 'POST', body: JSON.stringify({
                "service": service,
                "student": student,
                "date": moment(date).format('YYYY-MM-DD'),
                "start": moment(start).format('HH:mm:00'),
                "end": moment(end).format('HH:mm:00'),
                "price": price,
                "place": place
            })}).then((response) => response.json())
            .catch((error) => console.error(error));
        setShow(true);
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll}>
                <ListItem
                    title={'Choose Date'}
                    bottomDivider
                    topDivider
                />
                <DatePickerIOS
                    style={styles.input}
                    mode={"date"}
                    date={date}
                    locale={'en_GB'}
                    onDateChange={(date) => {setDate(date)}}
                />
                <ListItem
                    title={'Choose Start Time'}
                    bottomDivider
                    topDivider
                />
                <DatePickerIOS
                    style={styles.input}
                    mode={"time"}
                    date={start}
                    minuteInterval={15}
                    locale={'en_GB'}
                    onDateChange={(start) => {setStart(start)}}
                />
                <ListItem
                    title={'Choose End Time'}
                    bottomDivider
                    topDivider
                />
                <DatePickerIOS
                    style={styles.input}
                    mode={"time"}
                    date={end}
                    minuteInterval={15}
                    locale={'en_GB'}
                    onDateChange={(end) => {setEnd(end)}}
                />
                <ListItem
                    leftElement={<Text style={{fontSize: 18}}>Enter Place</Text>}
                    rightElement={
                        <TextInput
                        style={{height: 35, width: 175}}
                        placeholder={'e.g. Strawberry Street 12'}
                        onChangeText={(val) => setPlace(val)}
                    />
                    }
                    bottomDivider
                    topDivider
                />
                <ListItem
                    leftElement={<Text style={{fontSize: 18}}>Price:</Text>}
                    rightElement={<Text style={{fontWeight: '600', color: 'rgb(0,122,255)'}}>{ moment(end).diff(moment(start), 'minutes')/60 * navigation.getParam('price') }</Text>}
                    bottomDivider
                />
                <Button
                    style={{width: 100, marginTop: 20, marginLeft: 135, marginBottom: 10}}
                    title={'Save'}
                    onPress={() => save()}
                />
                <Text>{show ? 'Class Added' : ''}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    },
    tag: {
        fontSize: 16,
        fontWeight: '500',
        margin: 10
    },
    scroll: {
        width: '100%',
        backgroundColor: '#fff',
    },
    input: {
        marginLeft: 10,
        marginRight: 10
    }

});