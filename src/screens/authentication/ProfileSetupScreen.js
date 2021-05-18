import React from 'react';
import {View, StyleSheet} from 'react-native';
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
    },
    imagePicker: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    }
})