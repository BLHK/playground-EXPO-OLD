export const generateUsers = () => {
    let users = [];
    let myImage = require("../../assets/500full-igor-bogdanoff.jpg");

    for (let i = 0; i < 30; i++) {
        users.push(
            new User(
                i,
                myImage,
                "myName " + i,
                "sdasdkasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdad"
            )
        );
    }
    return users;
};

/*const populateArray = () => {
  for (let i = 0; i < 20; i++) {
    conversations.push({
      id: i,
      image: myImage,
      name: "myName " + i,
      message:
        "sdasdkasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdadneckasdasdasdad",
    });
  }
};*/
