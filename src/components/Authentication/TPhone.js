import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import {firebaseApp} from '../../config/FirebaseConfig.js';

export default class TPhone extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            code:'',
        }
    }
    goLogin(){
        navigator.push({name:'Login'})
    }
    dangky(){
        firebaseApp.auth().signInWithPhoneNumber('+841644113414', (confirm) => {
            console.log('Show popup to enter code');
            confirm('code'); 
          }).then((user) => {
            console.log('ok: ', code);
          })
          .catch(console.error);
    }
    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View>
           <TextInput 
           placeholder="Nhập SĐT" 
           onChangeText = {(sdt)=> this.setState({sdt})} 
           value = {this.state.sdt}
       />

            <TouchableOpacity style={bigButton} 
                onPress={()=>this.dangky()}
                >
                <Text style={buttonText}>Đăng ký</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop:20}} 
                onPress={()=>this.signOut()}
                >
                <Text>signOut</Text>
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
