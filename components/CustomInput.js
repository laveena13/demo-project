import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';



DEAFULT_COLOR = "#5b5b5b"
FOCUS_COLOR = "#20649b"
BLACK_COLOR = "#000000"
class CustomInput extends Component {
    state = { borderColor: DEAFULT_COLOR};
    onFocus() {
        this.setState({
            borderColor: FOCUS_COLOR
        })
    }

    onBlur(e) {
        this.setState({
            borderColor: DEAFULT_COLOR
        })
    }

    //const { value, label, placeholder, onChangeText, secureTextEntry } = props;
    render() {
        return (
            <View style={[styles.viewStyle, { borderColor: this.state.borderColor }]}>

                <TextInput
                    {...this.props}
                    onBlur={(e) => this.onBlur()}
                    onFocus={(e) => this.onFocus()}
                    autoCapitalize='none'
                    autoCorrect={false}
                    style={styles.textInputStyle}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                />
            </View>

        );
    }

}


const styles = {
    viewStyle: {
        flexDirection: 'row',
        width:'96%',
        height: 50,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: DEAFULT_COLOR,
        marginTop:4,
        marginRight:8,
        marginLeft:8,
        marginBottom:4
    },

    textInputStyle: {
        flex: 2,
        fontSize: 16,
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,

    },
};
export { CustomInput };