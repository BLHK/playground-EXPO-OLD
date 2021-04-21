import {MODAL} from "../ActionCreators/ModalActions";

const initialState = {
    modalActive: false,
    currentUser: {},
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL.OPEN_MODAL:
            return {modalActive: true, currentUser: action.payload};
        case MODAL.CLOSE_MODAL:
            return {modalActive: false, currentUser: {}};
        default:
            return state;
    }
};

export default modalReducer;
