import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { generateUser } from "../redux/Actions";

const MeetScreen = (props) => {
  return (
    <View style={styles.container}>
      <Button title="Add User" onPress={() => props.generateUser()} />
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

const mapDispatchToProps = { generateUser };

export default connect(mapStateToProps, mapDispatchToProps)(MeetScreen);
