/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { emailPasswordLogin } from '../services/auth-service';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  touchableContainer: {
    borderWidth: 1,
    borderColor: 'red'
  }
});

export default class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Email:</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <Text>Password:</Text>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />
        <TouchableHighlight style={styles.touchableContainer} onPress={() => { this.Login(); }}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.touchableContainer} onPress={() => {
          const { navigate } = this.props.navigation;
          navigate("SingUp", {});
        }}>
          <Text style={styles.signInText}>Create New Account?</Text>
        </TouchableHighlight>
      </View>
    );
  }

  Login() {
    let email = this.state.email.replace(/\s+/g, '');
    let password = this.state.password;

    emailPasswordLogin(email, password).then((val) => {
      Alert.alert('successfully Logged In');
      const { navigate } = this.props.navigation;
      navigate("Main", {});
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/account-exists-with-different-credential') {
        Alert.alert('account-exists-with-different-credential');
      } else if (errorCode == 'auth/invalid-credential') {
        Alert.alert('invalid-credential');
      } else if (errorCode == 'auth/operation-not-allowed') {
        Alert.alert('operation-not-allowed');
      } else if (errorCode == 'auth/user-disabled') {
        Alert.alert('user-disabled');
      }
      else if (errorCode == 'auth/user-not-found') {
        Alert.alert('user-not-found');
      }
      else if (errorCode == 'auth/wrong-password') {
        Alert.alert('wrong-password');
      }
      else if (errorCode == 'auth/invalid-verification-code') {
        Alert.alert('invalid-verification-code');
      } else if (errorCode == 'auth/invalid-verification-id') {
        Alert.alert('invalid-verification-id');
      } else {
        Alert.alert(errorMessage);
      }
    });
    
  }

}


