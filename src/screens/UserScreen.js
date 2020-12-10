import React from "react";
import { StyleSheet, Text, View } from "react-native";

const UserScreen = ({ params }) => {
  return (
    <View style={styles.container}>
      <Text>UserScreen</Text>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
