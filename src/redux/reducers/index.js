import { combineReducers } from "redux";
import usersReducer from "./UsersReducer";
import modalReducer from "./ModalReducer";

export default combineReducers({ users: usersReducer, modal: modalReducer });
