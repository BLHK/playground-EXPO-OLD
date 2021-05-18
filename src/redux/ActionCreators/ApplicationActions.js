export const APPLICATION = {
    SETUP_INTEREST_SELECTED: "SETUP_SELECT_INTEREST_SELECTED",
    SETUP_ADD_USER_IMAGES: "SETUP_ADD_USER_IMAGES",
};

export const setupInterestSelected = (interestId) => ({
    type: APPLICATION.SETUP_INTEREST_SELECTED,
    payload: interestId,
});

export const setupAddUserImages = (userImages) => ({
    type: APPLICATION.SETUP_ADD_USER_IMAGES,
    payload: userImages,
});