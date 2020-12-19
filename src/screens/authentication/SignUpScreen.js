import React, {useState} from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Firebase from "../../FirebaseConfig";



const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    Firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        console.log("ErrorMessage: ", errorMessage);
      }
      console.log("Error: ", error);
    });
  }

  return (
  <View style={styles.container}>
    <TextInput
      style={styles.inputBox}
      onChangeText={email => setEmail(email)}
      defaultValue={email}
      placeholder='Email'
    />
    <TextInput
      style={styles.inputBox}
      onChangeText={password => setPassword(password)}
      defaultValue={password}
      placeholder='Password'
      secureTextEntry={true}
    />
    <TouchableOpacity style={styles.button} onPress={() => handleSignUp(email, password)}>
      <Text style={styles.buttonText}>Signup</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{...styles.button, backgroundColor: 'red'}} 
    onPress={() => props.navigation.goBack()}>
      <Text style={styles.buttonText}>Back</Text>
    </TouchableOpacity>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#FFA611',
    borderColor: '#FFA611',
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

export default SignUp