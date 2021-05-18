import {APPLICATION} from "../ActionCreators/ApplicationActions";

const initialState = {
    loading: false,
    interestCollection: [
        {id: 1, name: "Gym", selected: false},
        {id: 2, name: "Reading", selected: false},
        {id: 3, name: "Going to the cinema", selected: false},
        {id: 4, name: "Studyingasdadadsa", selected: false},
    ],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLICATION.UPDATE_INTEREST_COLLECTION:
            return {
                ...state,
                interestCollection: {...action.payload}
            }
        default:
            return state
    }
}

export default UserReducer;