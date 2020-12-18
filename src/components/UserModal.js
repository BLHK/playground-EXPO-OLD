import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  SafeAreaView,
  ScrollView
} from "react-native";

import { connect } from "react-redux";
import { closeModal } from "../redux/ActionCreators/ModalActions";

const modalHeight = Math.round(Dimensions.get("window").height);
const modalWidth = Math.round(Dimensions.get("window").width);

const UserModal = (props) => {
  const ModalContent = () => {
    if(props.modalActive){
      return (

  <SafeAreaView style={styles.container}>
  <ScrollView bounces={false}>
        <View style={styles.modalContent}>
          <Image
            source={{ uri: props.currentUser.user.images[0] }}
            style={styles.image}
          />
          <Image
            source={{ uri: props.currentUser.user.images[0] }}
            style={styles.image}
          />
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
      </ScrollView>
    </SafeAreaView>
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
            <TouchableOpacity style={{height: modalHeight*0.155, width: modalWidth}} onPress={() => props.closeModal()}></TouchableOpacity>
              <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity style={{width: modalWidth*0.15, height: modalHeight*0.8, alignItems: 'flex-start'} } onPress={() => props.closeModal()}></TouchableOpacity>
                <TouchableOpacity style={{width: modalWidth*0.15, height: modalHeight*0.8, alignItems: 'flex-start'} } onPress={() => props.closeModal()}></TouchableOpacity>
              </View>
            <TouchableOpacity style={{height: modalHeight*0.05, width: modalWidth* 2}} onPress={() => props.closeModal()}></TouchableOpacity>
          
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
  container: {flex: 1},
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    overflow: "scroll",
    height: modalHeight *0.85,
    width: modalWidth * 0.85,
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
