import { GET_USERS, GENERATE_USER } from "../ActionTypes";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_USER: {
      const { id, image, name, message } = action.payload;
      return {
        ...state,
        users: [...state.users, { id, image, name, message }],
      };
    }
    case GET_USERS: {
    }
    default:
      return state;
  }
}
