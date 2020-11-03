import React from "react";
import { TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import ConversationCard from "../components/ConversationCard";

const MessagesScreen = (props) => {
  return (
    <SafeAreaView>
      <FlatList
        data={props.users}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ChatScreen")}
          >
            <ConversationCard params={item} />
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

export default connect(mapStateToProps)(MessagesScreen);
