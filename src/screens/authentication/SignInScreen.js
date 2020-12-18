import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Button} from 'react-native';
import {connect} from 'react-redux';

const SignInScreen = (props) => {
  return(
    <View style={styles.container}>
      <Text>LoginScreen</Text>
    </View>
  );
}

export default SignInScreen;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})