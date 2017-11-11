import React, { Component } from 'react';
import { View, Text,TouchableOpacity, Alert } from 'react-native';

export default class VoiceTest extends Component {

    speech(){
        // Speech.speak({
        //     text:'Hello',
        //     language:'en_US'
        // })
        alert('abc')
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress = {this.speech.bind()}>
                    <Text>Hello</Text>
                </TouchableOpacity>
            </View>
        );
    }
}