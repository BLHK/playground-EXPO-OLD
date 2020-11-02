import { GET_USERS, GENERATE_USER } from "./ActionTypes";

let nextUserId = 1;
let myImage = require("../../assets/500full-igor-bogdanoff.jpg");

export const generateUser = () => ({
  type: GENERATE_USER,
  payload: {
    id: ++nextUserId,
    image: myImage,
    name: "Bog " + nextUserId,
    message:
      "sdasdkasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdad",
  },
});
