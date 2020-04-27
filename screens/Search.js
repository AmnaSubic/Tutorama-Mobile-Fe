import React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet
} from 'react-native';
import {
    SearchBar,
    ListItem
} from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import contents from '../data/content.json';

export default class Search extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({search})
    };

    render() {
        const { search } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <SearchBar
                    placeholder='Search Tutors and Subjects'
                    searchIcon={{size: 24}}
                    onChangeText={this.updateSearch}
                    value={search}
                    cancelIcon
                    showCancel
                    containerStyle={styles.searchBar}
                    inputContainerStyle={styles.inputSearchBar}
                    inputStyle={styles.inputText}
                />

                <View>
                    <FlatList
                        data={contents}
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