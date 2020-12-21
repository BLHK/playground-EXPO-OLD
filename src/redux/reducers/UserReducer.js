import { USER } from "../ActionCreators/UserActions";

const initialState = {
  email: "",
  password: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN:
        return action.payload
    case USER.SIGNUP:
        return action.payload
    case USER.UPDATE_EMAIL:
        return { ...state, email: action.payload }
    case USER.UPDATE_PASSWORD:
        return { ...state, password: action.payload }
    default:
        return state
}
}

export default UserReducer;