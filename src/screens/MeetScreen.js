import React from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import MeetUserCard from "../components/MeetUserCard";

const MeetScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.users}
        numColumns={3}
        columnWrapperStyle={styles.flatListStyle}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Conversation")}
          >
            <MeetUserCard params={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  const { users } = state;
  return users;
}

export default connect(mapStateToProps)(MeetScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListStyle: {
    justifyContent: "space-evenly",
    paddingVertical: 5,
  },
});
