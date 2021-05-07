import { GET_SEARCH_DATA, SET_DATA_LOADING, SEARCH_DATA_ERROR } from "../types/search";

const initialState = {
    loading: false,
    albums: [],
    artists: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_DATA:
            return {
                ...state,
                albums: action.payload.albums,
                artists: action.payload.artists,
                loading: false
            }
        case SET_DATA_LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_DATA_ERROR:
            return state;
        default:
            return state;
    }
};

export default reducer;
