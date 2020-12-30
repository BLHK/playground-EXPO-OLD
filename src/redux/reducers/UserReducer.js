import { USER } from "../ActionCreators/UserActions";

const initialState = {
  loggedIn: false,
  user: {}
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.LOGIN:
      return {
        loggedIn: true,
        user: {...action.payload}
      }
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