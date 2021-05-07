import albumReducer from '../../../redux/reducers/album';

import { GET_ALBUM, SET_ALBUM_LOADING, ALBUM_ERROR } from "../../../redux/types/album";

const initialState = {
    loading: false,
    albumDetails: {},
    songs: [],
    error: false
};

describe("album reducer", () => {

    const payload = {
        resultCount: 2,
        results: [
            {
                collectionId: "1370494122",
                artworkUrl100:
                    "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/01/29/19/0129190f-1a37-fb80-0518-97261962beb5/source/100x100bb.jpg",
                artistName: "frytt",
                collectionName: "Siema - Single",
                releaseDate: "2002-08-08T07:00:00Z",
                country: "USA",
            },
            {
                trackId: "1122776152",
                trackName: "Politik",
                artistName: "frytt",
                collectionId: "1370494122",
            },
        ],
    };

    it ("should return initial state", () => {
        expect(albumReducer(undefined, {})).toEqual(initialState)
    })

    it ("should hande SET_ALBUM_LOADING", () => {
        
        const loadAction = {
            type: SET_ALBUM_LOADING
        }

        expect(albumReducer(undefined, loadAction)).toEqual({...initialState, loading: true});

    })

    it ("should hande GET_ALBUM", () => {
        const getAlbumAction = {
            type: GET_ALBUM,
            payload
        }
    
        let newState = {
            ...initialState,
            albumDetails: payload.results[0],
            songs: [payload.results[1]],
        }

        expect(albumReducer(initialState, getAlbumAction)).toEqual(newState)

    })

    it ("should hande ALBUM_ERROR", () => {
        
        const errorAlbum = {
            type: ALBUM_ERROR
        }

        expect(albumReducer(undefined, errorAlbum)).toEqual({...initialState, error: true});

    })

})