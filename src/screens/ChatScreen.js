import React from "react";
import { TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import ConversationCard from "../components/ConversationCard";

let conversations = [];
let myImage =
  "https://cdn.svenskalag.se/teamdata/images/3690/74138/Sebastian%20Jonsson_2_beskuren_730.jpg?1";

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
};

const ChatScreen = ({ navigation }) => {
  populateArray();

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
