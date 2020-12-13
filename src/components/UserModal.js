import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Dimensions,
} from "react-native";

import { connect } from "react-redux";
import { closeModal } from "../redux/ActionCreators/ModalActions";

const modalHeight = Math.round(Dimensions.get("window").height * 0.85);
const modalWidth = Math.round(Dimensions.get("window").width * 0.85);

const UserModal = (props) => {
  const ModalContent = () => {
    if(props.modalActive){
      return (
        <View style={styles.modalContent}>
          <Image
            source={{ uri: props.currentUser.user.images[0] }}
            style={styles.image}
          />
          <Text>{props.currentUser.user.name}</Text>
          <TouchableHighlight
            style={styles.openButton}
            onPress={() => {
              props.closeModal();
            }}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      );
    }else {
      return (
        <View></View>
      )
    }
  } 

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalActive}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ModalContent />
          </View>
        </View>
      </Modal>
    </View>
  );
};

function mapStateToProps(state) {
  const modalActive = state.modal.modalActive;
  const currentUser = state.modal.currentUser;
  return { modalActive, currentUser };
}

const mapDispatchToProps = {
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    height: modalHeight,
    width: modalWidth,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContent: {
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: modalWidth,
    height: modalWidth,
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
