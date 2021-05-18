export const APPLICATION = {
    SET_INTEREST_COLLECTION: "SET_INTEREST_COLLECTION",
    SET_INTEREST_SELECTED: "SET_INTEREST_SELECTED",
};

export const updateInterestCollection = (interestCollection) => ({
    type: APPLICATION.SET_INTEREST_COLLECTION,
    payload: interestCollection,
});

export const setInterestSelected = (interestId) => ({
    type: APPLICATION.SET_INTEREST_SELECTED,
    payload: interestId,
});