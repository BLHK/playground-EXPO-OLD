import React, {useEffect} from 'react';
import {View, StyleSheet, Pressable, Text, TextInput} from 'react-native';
import InterestBubbleContainer from '../../components/InterestBubbleContainer.js';
import CustomImagePicker from '../../components/CustomImagePicker'
import {connect} from "react-redux";
import {setupInterestSelected, setupSetContinueButton, setupSetUsernameTextField} from "../../redux/ActionCreators/ApplicationActions";

const ProfileSetupScreen = (props) => {

  useEffect(() => {
      (props.selectedInterests.length > 2 && props.setupUserImages.length > 0 && props.setupUsernameTextField.length > 1) ?
          props.setupSetContinueButton(false) :
          props.setupSetContinueButton(true);
  });

    return (
        <View style={styles.container}>

            <TextInput
                style={styles.inputBox}
                value={props.setupUsernameTextField}
                onChangeText={username => props.setupSetUsernameTextField(username)}
                placeholder='Name'
            />
            <View style={styles.imagePicker}>
                <CustomImagePicker/>
            </View>
            <InterestBubbleContainer/>
            <View>
                <Pressable disable={props.setupContinueButton} style={styles.continueButton}>
                    {(
                        props.setupContinueButton ?
                          <Text>I'm disabled</Text> :
                          <Text>I'm enabled</Text>
                    )}
                </Pressable>
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        selectedInterests: state.application.selectedInterests,
        setupUserImages: state.application.setupUserImages,
        setupContinueButton: state.application.setupContinueButton,
        setupUsernameTextField: state.application.setupUsernameTextField,
    }
};

const mapDispatchToProps = {
  setupInterestSelected: setupInterestSelected,
  setupSetContinueButton: setupSetContinueButton,
  setupSetUsernameTextField: setupSetUsernameTextField,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSetupScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: "20%",
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
    imagePicker: {
    },
    continueButton: {
        backgroundColor: '#00dede',
        borderRadius: 20,
        padding: 10,
        margin: 2,
    }
})