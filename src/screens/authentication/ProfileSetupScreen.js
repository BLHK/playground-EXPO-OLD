import React from 'react';
import {View, StyleSheet} from 'react-native';
import InterestBubbleContainer from '../../components/InterestBubbleContainer.js';
import CustomImagePicker from '../../components/CustomImagePicker'

const myInterests = [
    {id: 1, name: "Gym", selected: false},
    {id: 2, name: "Reading", selected: false},
    {id: 3, name: "Going to the cinema", selected: false},
    {id: 4, name: "Studyingasdadadsa", selected: false},
]

const ProfileSetupScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imagePicker}>
                <CustomImagePicker/>
            </View>
            <InterestBubbleContainer interests={myInterests}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    imagePicker: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    }
})

export default ProfileSetupScreen;