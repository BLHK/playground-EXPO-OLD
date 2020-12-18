import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {connect} from 'react-redux';

const SignInScreen = (props) => {
  return(
    <View style={styles.container}>
      <TextInput style={styles.inputBox} placeholder="Email" />
      <TextInput style={styles.inputBox} placeholder="Password" secureTextEntry={true}/>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button title="Don't have an account yet? Sign up" onPress={() => props.navigation.navigate("SignUp")}/>
    </View>
  );
}

export default SignInScreen;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: "60%",
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#F6820D',
    borderColor: '#F6820D',
    borderWidth: 1,
    borderRadius: 5,
    width: 200
},
  buttonText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
  },
  buttonSignup: {
      fontSize: 12
  }
})