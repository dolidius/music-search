import { SET_DATA_LOADING, GET_SEARCH_DATA, SEARCH_DATA_ERROR } from "../types/search";

import axios from "axios";

export const getAlbums = async (phrase) => {
    const res = await axios
        .get(`https://itunes.apple.com/search?term={${phrase}}&entity=album`)
        .catch((err) => console.log(err));

    return await res.data;
};

export const getArists = async (phrase) => {
    const res = await axios
        .get(
            `https://itunes.apple.com/search?term={${phrase}}&entity=musicArtist`
        )
        .catch((err) => console.log(err));

    return await res.data;
};

export const loadData = (phrase) => async (dispatch) => {
    dispatch(setDataLoading());
    try{
        const [albums, artists] = await Promise.all([
            getAlbums(phrase),
            getArists(phrase),
        ]);
        dispatch({
            type: GET_SEARCH_DATA,
            payload: { albums, artists },
        });
    } catch (err) {
        dispatch({
            type: SEARCH_DATA_ERROR
        });
    }
    
};

export const setDataLoading = () => {
    return {
        type: SET_DATA_LOADING,
    };
};
