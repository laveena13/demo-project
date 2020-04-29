import React, { Component } from 'react'
import { View, Text, Button, StyleSheet,ScrollView } from 'react-native'
import CustomButton from '../components/CustomButton'
import GetName from '../components/GetName'
import { CustomInput } from '../components/CustomInput'


export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: ""
        }
    }
    showState = () => {
        return `Name: ${this.state.name} , Email: ${this.state.email} , Password: ${this.state.password} `
    }
    render() {
        return (
            <ScrollView style={style.container}>
                <Text style={style.heading}>TASK 1</Text>
                <CustomButton title="Move To"
                              navigator={this.props.navigation}
                              navigate="Detail"

                />
                <Text style={style.heading}>TASK 2</Text>
                <GetName name="Name Arjun" />
                <GetName name="Name Rajat" />
                <GetName name="Name Sahil" />
                <GetName name="Name Lavi" />
                <Text style={style.heading}>TASK 3</Text>
                <View>
                    <CustomInput
                        placeholder="Name"
                        onChangeText={(value) => { this.setState({ name: value }) }}
                    />
                    <CustomInput
                        placeholder="Email"
                        onChangeText={(value) => { this.setState({ email: value }) }}
                    />
                    <CustomInput
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={(value) => { this.setState({ password: value }) }}
                    />


                </View>
                <Button title="Check State" onPress={() => alert(this.showState())} />

            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 20
    },
    container:{
        flex:1,
        backgroundColor:"#FFFFFF"
    }
})