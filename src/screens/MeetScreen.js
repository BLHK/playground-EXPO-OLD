import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MeetScreen = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => props.navigation.navigate("Secondary")}
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

export default MeetScreen;
