import { GET_ALBUM, SET_ALBUM_LOADING, ALBUM_ERROR } from "../types/album";

import axios from "axios";

export const getAlbumData = (id) => (dispatch) => {
    dispatch(setAlbumLoading());
    return axios
        .get(`https://itunes.apple.com/lookup?id=${id}&entity=song`, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then((res) => {
            dispatch({
                type: GET_ALBUM,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch({ type: ALBUM_ERROR });
        });
};

export const setAlbumLoading = () => {
    return {
        type: SET_ALBUM_LOADING,
    };
};
