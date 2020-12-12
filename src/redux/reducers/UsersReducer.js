import { USERS } from "../ActionCreators/UserActions";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS.GET_USERS_REQUEST:
      return { ...state, loading: true };
    case USERS.GET_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: null };
    case USERS.GET_USERS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
