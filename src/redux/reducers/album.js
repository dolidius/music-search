import { GET_ALBUM, SET_ALBUM_LOADING, ALBUM_ERROR } from "../types/album";

const initialState = {
    loading: false,
    albumDetails: {},
    songs: [],
    error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUM:
            return {
                ...state,
                albumDetails: action.payload.results[0],
                songs: action.payload.results.slice(1),
                loading: false,
                error: false
            };
        case SET_ALBUM_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ALBUM_ERROR:
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state;
    }
};

export default reducer;