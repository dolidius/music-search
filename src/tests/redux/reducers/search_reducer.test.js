import searchReducer from '../../../redux/reducers/search';

import { GET_SEARCH_DATA, SET_DATA_LOADING } from "../../../redux/types/search";

const initialState = {
    loading: false,
    albums: [],
    artists: []
};

describe ("search reducer", () => {

    const albums = [
        {
            collectionId: "1370494122",
            artworkUrl100:
                "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/01/29/19/0129190f-1a37-fb80-0518-97261962beb5/source/100x100bb.jpg",
            artistName: "frytt",
            collectionName: "Siema - Single",
        },
        {
            collectionId: "13704941232312",
            artworkUrl100:
                "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/01/29/19/0129190f-1a37-fb80-0518-97261962beb5/source/100x100bb.jpg",
            artistName: "frytt123",
            collectionName: "Siema - Single123",
        },
    ];

    const artists = [
        {
            artistName: "Guztav & Siëma",
            primaryGenreName: "Dance",
            artistId: "1",
        },
        {
            artistName: "Guztav & Siëmdasa",
            primaryGenreName: "Dance123",
            artistId: "2",
        },
    ];

    const payload = {
        albums: { resultCount: 2, results: albums },
        artists: { resultCount: 2, results: artists },
    };

    it ('should hande SET_DATA_LOADING', () => {

        const loadAction = {
            type: SET_DATA_LOADING
        }

        expect(searchReducer(undefined, loadAction)).toEqual({...initialState, loading: true});

    })

    it ('should handle GET_SEARCH_DATA', () => {
        const getDataAction = {
            type: GET_SEARCH_DATA,
            payload
        }
    
        let newState = {
            ...initialState,
            albums: payload.albums,
            artists: payload.artists
        }

        expect(searchReducer(initialState, getDataAction)).toEqual(newState);
    })

});

