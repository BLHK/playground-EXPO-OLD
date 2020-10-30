import { GET_USERS, GENERATE_USER } from "../ActionTypes";

let myImage = require("../../../assets/500full-igor-bogdanoff.jpg");

const initialState = {
  users: [
    {
      id: 1,
      image: myImage,
      name: "myName " + 1,
      message:
        "sdasdkasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdad",
    },
  ],
};

const userReducer = (state = initialState, action) => {
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
};
export default userReducer;
