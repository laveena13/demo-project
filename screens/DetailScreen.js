import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class DetailScreen extends Component {
    render() {
        return (
            <View style={style.header}>
                <Text >Detail Screen</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    header: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})