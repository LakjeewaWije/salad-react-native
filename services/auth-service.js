 
 import {db,auth} from '../firebaseConf';
 import { Platform, StyleSheet, Text, View, TextInput, TouchableHighlight,Alert } from 'react-native';
  function  emailPasswordSignUp(email,password){
    return    auth.createUserWithEmailAndPassword(email, password);

    }

  function emailPasswordLogin(email,password){
    return auth.signInWithEmailAndPassword(email,password);
  }
export {emailPasswordSignUp,emailPasswordLogin};
