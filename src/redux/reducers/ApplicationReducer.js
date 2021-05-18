import {APPLICATION} from "../ActionCreators/ApplicationActions";

const initialState = {
    loading: false,
    interestCollection: [
        {id: 1, name: "Gym"},
        {id: 2, name: "Reading"},
        {id: 3, name: "Going to the cinema"},
        {id: 4, name: "Studyingasdadadsa"},
    ],
    selectedInterests: [],
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLICATION.SET_INTEREST_COLLECTION:
            return {
                ...state,
                interestCollection: {...action.payload}
            }
        case APPLICATION.SET_INTEREST_SELECTED:
            return {
                ...state,
                selectedInterests:
                    (state.selectedInterests.includes(action.payload) ?
                    state.selectedInterests.filter(e => e !== action.payload) :
                    state.selectedInterests.concat(action.payload))
            }
        default:
            return state
    }
}

export default UserReducer;