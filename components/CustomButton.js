import React, { Component } from 'react'
import { Button } from 'react-native'

export default CustomButton = ({title,navigator,navigate}) => (
    <Button
        onPress={() => {
            navigator.navigate(navigate)
        }}
        title={title}
        color="#841584"

    />
)