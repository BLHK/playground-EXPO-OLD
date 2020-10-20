import { GET_USERS, GENERATE_USER } from "./ActionTypes";

let nextUserId = 0;
let myImage = require("../../assets/500full-igor-bogdanoff.jpg");

export const generateUser = () => ({
  type: GENERATE_USER,
  payload: {
    id: ++nextUserId,
    image: myImage,
    name: "myName " + i,
    message:
      "sdasdkasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdad",
  },
});
