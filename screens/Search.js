import React, {useEffect, useState} from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet, ActivityIndicator, TouchableOpacity
} from 'react-native';
import {
    SearchBar,
    ListItem, Button
} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

export default function Search({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dev/services')
            .then((response) => response.json())
            .then((json) => setData(json.data))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? <ActivityIndicator/> : (
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                            <ListItem
                                title={item.subject}
                                rightElement={
                                    <View>
                                        <Text style={{ marginBottom: 5, paddingTop: 6, textAlign: "center", height: 30, width: 75, borderRadius: 5,borderColor: 'rgb(0,122,255)', borderWidth: 1, color: 'rgb(0,122,255)'}} onPress={() => navigation.navigate('Schedule', item)}>Schedule</Text>
                                        <Text style={{paddingTop: 6, textAlign: "center", height: 30, width: 75, borderRadius: 5,borderColor: 'rgb(52,199,89)', borderWidth: 1, color: 'rgb(52,199,89)'}} onPress={() => navigation.navigate('Service', item)}>View Info</Text>
                                    </View>
                                }
                                subtitle={item.price + 'KM/h'}
                                bottomDivider />
                            )}
                />
            </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});