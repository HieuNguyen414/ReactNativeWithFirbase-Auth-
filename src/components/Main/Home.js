import React, { Component } from 'react';
import { 
    View, Text,Button, TextInput
 } from 'react-native';
 import {firebaseApp} from '../../config/FirebaseConfig.js';
 

 export default class Home extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          phoneNumber: '',
          code:'',
        };
      }

      xacnhansdt(){
        var phoneNumberuser = '+841644113414';
        firebaseApp.auth().signInWithPhoneNumber(phoneNumberuser)
            .then(function () {
              alert('Ok')
            }).catch(function (error) {
             alert('Có lỗi trong quá trình thực hiện')
            });
      }
      xacnhancode(){
        var user = firebaseApp.auth().currentUser;
        
        user.sendEmailVerification().then(function() {
          alert('Đã gửi email xác nhận tới : chanhhieu414@gmail.com')
        }).catch(function(error) {
          alert('error')
        });
              }
     render() {
         return (
             <View style = {{flex:1, flexDirection:'column'}}>
                <View style={{ margin: 10,}}>
                   <TextInput
                        placeholder = {'+84'}
                        style = {{justifyContent:'center', alignItems:'center'}}
                        value={this.state.phoneNumber}
                        onChangeText={phoneNumber => this.setState({ phoneNumber })}
                   />
                   <Button
                        title="Đăng ký SDT" 
                        onPress = {this.xacnhansdt}
                   />
                </View>

                <View style={{margin: 10}}>
                    
                    <TextInput
                        placeholder = {'Nhập mã xác nhận'}
                        value={this.state.code}
                        onChangeText={code => this.setState({ code })}
                    />
                    <Button 
                        title="Xác thực SDT" 
                        onPress={this.xacnhancode} />
                </View>

                
             </View>
         );
     }
 }
