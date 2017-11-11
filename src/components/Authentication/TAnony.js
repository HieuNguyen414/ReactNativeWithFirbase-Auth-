import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {firebaseApp} from '../../config/FirebaseConfig.js';

export default class TAnony extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
        }
    }
    goLogin(){
        navigator.push({name:'Login'})
    }
    dangky(){
        firebaseApp.auth().signInAnonymously()
        .then(()=>{
            Alert.alert(
                'Thông báo',
                'Đăng ký thành công:',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        })
        .catch(function(error) {
            Alert.alert(
                'Thông báo',
                'Đăng ký thất bại!',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              ) 
          });
    }
    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        
        return (
            <View>
            <TextInput 
                style={inputStyle} 
                placeholder="Nhập email" 
                onChangeText = {(email)=> this.setState({email})} 
                value = {this.state.email}
            />
            <TextInput 
                style={inputStyle} 
                placeholder="Nhập mật khẩu" 
                secureTextEntry
                onChangeText = {(password)=> this.setState({password})} 
                value = {this.state.password}
            />
            <TouchableOpacity style={bigButton} 
                onPress={()=>this.dangky()}
                >
                <Text style={buttonText}>Đăng ký</Text>
            </TouchableOpacity>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        marginBottom: 10,
        paddingLeft: 30,
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#fff'
    },
    bigButton: {
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#3EBA77'
    },
    buttonText: {
        fontWeight: '400'
    }
});
