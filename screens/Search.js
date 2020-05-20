import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet, ActivityIndicator
} from 'react-native';
import {
    SearchBar,
    ListItem
} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true, search: ''};
        this.arrayholder = [];
    }

    componentDidMount() {
        return fetch('https://my-json-server.typicode.com/amnicaaaa/tutorama-mobile-db-json/tutors')
            .then(response => response.json())
            .then(responseJson => {
                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson,
                    },
                    function () {
                        this.arrayholder = responseJson;
                    }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    search = text => {
        console.log(text);
    };
    clear = () => {
        this.search.clear();
    };

    SearchFilterFunction(text) {
        const newData = this.arrayholder.filter(function (item) {
            const itemData = `${item.fn} || ${item.ln}` ? `${item.fn} || ${item.ln}`.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            dataSource: newData,
            search: text,
        });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.3,
                    width: '90%',
                    backgroundColor: '#080808'
                }}
            />
        );
    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return (
            <SafeAreaView style={styles.container}>
                <SearchBar
                    placeholder='Search Tutors and Subjects'
                    searchIcon={{size: 24}}
                    onChangeText={text => this.SearchFilterFunction(text)}
                    onClear={text => this.SearchFilterFunction('')}
                    value={this.state.search}
                    cancelIcon
                    showCancel
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.inputSearchBar}
                    inputStyle={styles.inputText}
                />
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        ItemSeparatorComponent={this.ListViewItemSeparator}
                        renderItem={({item}) => (
                            <ListItem
                                leftElement={<Text>{item.fn} {item.ln}</Text>}
                            />
                        )}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    searchBar: {
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 0,
        borderTopWidth: 0,
    },
    inputSearchBar: {
        borderRadius: 10,
        backgroundColor: 'rgb(242,242,247)'
    },
    inputText: {
        color: 'rgb(142,142,147)'
    }
});