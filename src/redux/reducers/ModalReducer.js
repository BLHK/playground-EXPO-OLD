import { MODAL } from "../ActionCreators/ModalActions";

const initialState = {
  modalActive: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL.SET_MODAL:
      return { modalActive: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
