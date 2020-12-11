import React, { useState, useEffect } from "react";
import { View, Button, Image, Platform, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import {
  postUser,
  getUsers,
  getUserById,
} from "../redux/ActionCreators/UserActions";
import { setModalActive } from "../redux/ActionCreators/ModalActions";

const ProfileScreen = (props) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={"Camera"}
        onPress={() => props.navigation.navigate("Camera")}
      />
      <Button title={"Album"} onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Post user" onPress={() => props.postUser()} />
      <Button title="Get all users" onPress={() => props.getUsers()} />
      <Button title="Get user by ID" onPress={() => props.getUserById()} />
      <Button title="Check modal state" onPress={() => setModalActive(true)} />
    </View>
  );
};

const mapStateToProps = (state) => {
  const { users } = state;
  return users;
};

const mapDispatchToProps = {
  postUser,
  getUsers,
  getUserById,
  setModalActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
