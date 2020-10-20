import React from "react";
import { TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import ConversationCard from "../components/ConversationCard";
import generateUsers from "../data/DummyData";

//let conversations = [];

/*let myImage = require("../../assets/500full-igor-bogdanoff.jpg");

const populateArray = () => {
  for (let i = 0; i < 20; i++) {
    conversations.push({
      id: i,
      image: myImage,
      name: "myName " + i,
      message:
        "sdasdkasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdad",
    });
  }
};*/

const ChatScreen = ({ navigation }) => {
  // if (conversations.length > !0) {
  //   generateUsers();
  // }
  //populateArray();

  return (
    <SafeAreaView>
      <FlatList
        data={conversations}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Conversation")}>
            <ConversationCard params={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
