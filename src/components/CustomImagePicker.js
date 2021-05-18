import React, {useState} from 'react';
import {View, Button, Platform, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CustomImagePicker = () => {
    const [image, setImage] = useState(null);

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
            setImage(result.uri);
        }
    };

    return (
        <View>
            <Button title={"Pick image from Album"} onPress={pickImageHandler}/>
            <View style={{width: 200, height: 200, backgroundColor: "black"}}>
                {image && (
                    <Image source={{uri: image}} style={{width: 200, height: 200}}/>
                )}
            </View>
        </View>
    )
}

export default CustomImagePicker;