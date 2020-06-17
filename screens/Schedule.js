import React from "react";
import {Text} from "react-native";

export default function Schedule({navigation}) {
    return (
        <Text>Schedule {navigation.getParam('subject')}</Text>
    )
}