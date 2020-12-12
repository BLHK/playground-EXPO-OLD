import { MODAL } from "../ActionCreators/ModalActions";

const initialState = {
  modalActive: true,
  currentUser: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL.OPEN_MODAL:
      return { modalActive: true, currentUser: action.payload };
    case MODAL.CLOSE_MODAL:
      return { ...state, modalActive: false };
    default:
      return state;
  }
};

export default modalReducer;
