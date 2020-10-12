import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ProfileScreen = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title={"Camera"}
        onPress={() => props.navigation.navigate("Camera")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
