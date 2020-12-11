import React, { useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { getUsers } from "../redux/ActionCreators/UserActions";
import { openModal, closeModal } from "../redux/ActionCreators/ModalActions";
import MeetUserCard from "../components/MeetUserCard";

const MeetScreen = (props) => {
  //Code for only running at startup. Dont wanna spam requests, so leaving this commented now.
  // useEffect(() => {
  //   if (props.users.length == 0 && props.loading !== true) {
  //     console.log("meetscreen loaded");
  //     props.getUsers();
  //   } //Will get stuck if there's no users in db.
  // });
  console.log(props.modalActive);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        onScrollEndDrag={() => props.getUsers()}
        data={props.users}
        numColumns={3}
        columnWrapperStyle={styles.flatListStyle}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setModalActive()}>
            <MeetUserCard params={item.user} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  const users = state.users.users;
  const modalActive = state.modal.modalActive;
  return { users, modalActive };
}

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListStyle: {
    justifyContent: "space-evenly",
    paddingVertical: 5,
  },
});
