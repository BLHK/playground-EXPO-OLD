import React from 'react';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import InterestBubbleContainer from '../../components/InterestBubbleContainer.js';
import CustomImagePicker from '../../components/CustomImagePicker'
import {connect} from "react-redux";

const ProfileSetupScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.imagePicker}>
                <CustomImagePicker/>
            </View>

            <InterestBubbleContainer interests={props.interestCollection}/>

            <View>
                <Pressable disable={true} style={styles.continueButton}>
                    {({ pressed }) => (
                        pressed ?
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
        interestCollection: state.application.interestCollection,
    }
};

const mapDispatchToProps = {
    //TODO Add dispatch for updating selected interests.
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