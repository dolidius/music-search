import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { loadData } from "../../../redux/actions/search";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import {
    GET_SEARCH_DATA,
    SET_DATA_LOADING,
} from "../../../redux/types/search";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);

const store = mockStore({
    loading: false,
    albums: [],
    artists: [],
});

describe("search actions", () => {
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
        albums: { resultCount: 2, results: artists },
        artists: { resultCount: 2, results: artists },
    };

    it("should dispatch GET_SEARCH_DATA after successful search data call", () => {
        mock.onGet("https://itunes.apple.com/search?term={coldplay}&entity=album").reply(
            200,
            {
                res: { data: payload },
            }
        );

        mock.onGet("https://itunes.apple.com/search?term={coldplay}&entity=musicArtist").reply(
            200,
            {
                res: { data: payload },
            }
        );

        store.dispatch(loadData("coldplay")).then(() => {
            let expectedActions = [
                { type: SET_DATA_LOADING },
                { type: GET_SEARCH_DATA, payload },
            ];

            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
