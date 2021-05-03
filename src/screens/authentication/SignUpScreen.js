import React from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {updateEmail, updatePassword} from "../../redux/ActionCreators/UserActions";
import  {signupWithEmail} from "../../api/FirebaseAPI";

const SignUpScreen = (props) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                value={props.email}
                onChangeText={email => props.updateEmail(email)}
                placeholder='Email'
            />
            <TextInput
                style={styles.inputBox}
                value={props.password}
                onChangeText={password => props.updatePassword(password)}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={() => props.signupWithEmail(props.email, props.password)}>
                <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{...styles.button, backgroundColor: 'red'}}
                              onPress={() => props.navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        email: state.user.email,
        password: state.user.password,
    }
};

const mapDispatchToProps = {
    updateEmail, updatePassword, signupWithEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);

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