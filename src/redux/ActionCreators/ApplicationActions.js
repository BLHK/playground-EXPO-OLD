export const APPLICATION = {
    UPDATE_INTEREST_COLLECTION: "UPDATE_INTEREST_COLLECTION",
};

export const updateInterestCollection = (interestCollection) => ({
    type: APPLICATION.UPDATE_INTEREST_COLLECTION,
    payload: interestCollection,
});