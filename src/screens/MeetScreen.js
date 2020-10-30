import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";

const MeetScreen = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Press me"
        onPress={() => props.navigation.navigate("Secondary")}
      />
      <Text>You have {props.users.length} users added.</Text>
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

const mapStateToProps = (state) => {
  const { users } = state;
  return users;
};

export default connect(mapStateToProps)(MeetScreen);
