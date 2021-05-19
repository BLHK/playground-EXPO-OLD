import React, {useEffect} from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import InterestBubbleContainer from '../../components/InterestBubbleContainer.js';
import CustomImagePicker from '../../components/CustomImagePicker'
import {connect} from "react-redux";
import {setupInterestSelected, setupSetContinueButton} from "../../redux/ActionCreators/ApplicationActions";

const ProfileSetupScreen = (props) => {

  useEffect(() => {
      (props.selectedInterests.length > 2 && props.setupUserImages.length > 0) ?
          props.setupSetContinueButton(false) :
          props.setupSetContinueButton(true);
  });

    return (
        <View style={styles.container}>
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
    }
};

const mapDispatchToProps = {
  setupInterestSelected: setupInterestSelected,
  setupSetContinueButton: setupSetContinueButton
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSetupScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: "20%",
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