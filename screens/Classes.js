import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    ActivityIndicator,
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
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/dev/classes/student/1')
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
                                <Text style={styles.title}>Classes</Text>
                            }
                        />
                        <FlatList
                            style={styles.list}
                            data={data}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={() => navigation.navigate('Class', item)}>
                                    <ListItem
                                        style={styles.item}
                                        leftElement={<Text style={{fontWeight: '500'}}>{item.name}</Text>}
                                        rightElement={<Text style={{color: 'gray'}}>{item.date}</Text>}
                                        chevron
                                        bottomDivider
                                    />
                                </TouchableOpacity>
                            )}
                        />
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
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    item: {
        width: '100%'
    },
    list: {
        width: '100%'
    },
    view: {
        width: '100%',
        flex: 2
    },

});