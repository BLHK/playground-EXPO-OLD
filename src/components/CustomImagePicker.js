import React from 'react';
import {View, Button, Platform, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {setupAddUserImages} from "../redux/ActionCreators/ApplicationActions";
import {connect} from "react-redux";

const CustomImagePicker = (props) => {

    const pickImageHandler = async () => {
        if (Platform.OS !== "web") {
            const {
                status,
            } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== "granted") {
                alert("Sorry, camera roll permission is necessary for uploading images from your storage.");
            } else {
                await pickImage();
            }
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0,
        });

        console.log(result);

        if (!result.cancelled) {
            props.setupAddUserImages(result.uri)
        }
    };

    return (
        <View>
            <Button title={"Pick image from Album"} onPress={pickImageHandler}/>
            <View style={{width: 200, height: 200, backgroundColor: "black"}}>
                {props.setupUserImages[0] && (
                    <Image source={{uri: props.setupUserImages[0]}} style={{width: 200, height: 200}}/>
                )}
            </View>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        setupUserImages: state.application.setupUserImages,
    }
};

const mapDispatchToProps = {
    setupAddUserImages: setupAddUserImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomImagePicker);