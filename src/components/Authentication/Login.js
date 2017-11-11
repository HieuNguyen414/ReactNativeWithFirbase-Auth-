import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet,Alert,Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ValidationComponent from 'react-native-form-validator';
import {firebaseApp} from '../../config/FirebaseConfig.js';
import Home from '../Main/Home.js';
// import Test from './Test.js';
import Register from './Register.js';
import { DrawerNavigator } from 'react-navigation';     


 export default class Login extends Component {
    // componentWillMount() {
    //     GoogleSignin.hasPlayServices({ autoResolve: true });
    //     GoogleSignin.configure({
    //       webClientId: '67598360839-d79ojt9gvjt1kcudslp9hn0hlte6jkiq.apps.googleusercontent.com'
    //     })
    //   }

    constructor(props){
         super(props);
         this.state = {
            email:'',
            password:'',
            emptyemail:false,
            emptypass:false,
            placeholderemail:'Nhập email',
            placeholderpass:'Nhập mật khẩu',
            showPasswordText: 'Hide password',
            emailError: '',
            passwordError: '',
            forgetPass:'Quên mật khẩu',
         };
     }
     dangnhap(){
        
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
                'Thông báo',
                'Bạn đã đăng nhập thành công:'+ this.state.email,
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')}
                ],
                { cancelable: false }
              )
              this.setState({
                email:'', 
                password:'',
              })
        })
        .catch(function(error) {
            Alert.alert(
                'Thông báo',
                'Đăng nhập không thành công, Vui lòng kiểm tra lại tài khoản hoặc mật khẩu!',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              ) 
          });
    }
    // goHome(){
    //     var {navigate} = this.props.navigation;
    //     navigate("Home")
    // }

    // handleSigninGoogle() {
    //     GoogleSignin.signIn().then((user) => {
    //       console.log(user);
    //     }).catch((err) => {
    //        console.log('Lỗi đăng nhập', err);
    //     }).done();
    //   }

    handleShowPassword() {
        let text = 'Hide password'
        if(this.state.showPasswordText == 'Hide password') text = 'Show password'
        this.setState({ 
            showPassword: !this.state.showPassword,
            showPasswordText: text
        });
        }
    forgetPassword(){
        var emailAddress = "chanhhieu414@gmail.com";
        firebaseApp.auth().sendPasswordResetEmail(emailAddress).then(function() {
            alert('Đã gửi email xác thực tới '+ emailAddress + '. Vui lòng kiểm tra lại email')
          }).catch(function(error) {
           alert('Có lỗi trong quá trình thực hiện')
          });
    }
     render() {
        const { inputStyle, bigButton, buttonText, nut,buttonStyle,butgg, butfb,
            } = styles;
            
         return (
            <View>
            <TextInput
                style={inputStyle}
                placeholder= {this.state.placeholderemail}
                onChangeText = {(email)=> this.setState({email})} 
                value = {this.state.email}
            />
            <TextInput
                style={inputStyle}
                placeholder={this.state.placeholderpass}
                secureTextEntry={!this.state.showPassword}
                onChangeText = {(password)=> this.setState({password})} 
                value = {this.state.password}
            />
            <View 
            style = {{flexDirection:'row', justifyContent:'center', alignItems:'center'}}
            >
                <Text style={{padding:20, marginLeft:0}} onPress={this.handleShowPassword.bind(this)}>
                     {this.state.showPasswordText}
                </Text>
                <Text style={{padding:20, marginRight:0}} onPress={this.forgetPassword.bind(this)}>
                   {this.state.forgetPass}
                </Text>
            </View>

            <TouchableOpacity
                 style={bigButton} 
                 onPress={()=>{this.dangnhap()}}
            >
                <Text style={buttonText}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity style={butgg} onPress={() => this.handleSigninGoogle()} >
                <Text style={buttonText}>Đăng nhập với google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={butfb} 
            
            >
                <Text style={buttonText}>
                Đăng nhập với Facebook
                </Text>
            </TouchableOpacity>
       
        </View>
         );
     }

    }

 const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        marginTop:0,
        marginBottom: 10,
        paddingLeft: 30,
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#fff',
        backgroundColor:'#fff', 
        fontWeight: '400', 
        fontSize:15,
    },
    bigButton: {
        marginBottom:10,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#3EBA77',
    },
    buttonText: {
        fontWeight: '400', 
        fontSize:15,
          color: '#FFF', 
    },
    butgg: {
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        backgroundColor:'#F00',
    },
    butfb:{
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:10,
        backgroundColor:'#3B5998',
    },
});
