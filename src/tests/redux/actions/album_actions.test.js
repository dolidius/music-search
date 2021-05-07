import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getAlbumData } from "../../../redux/actions/album";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

import { GET_ALBUM, SET_ALBUM_LOADING, ALBUM_ERROR } from "../../../redux/types/album";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const mock = new MockAdapter(axios);

const store = mockStore({
    loading: false,
    albumDetails: {},
    songs: [],
    error: false,
});

describe("album actions", () => {
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

    beforeEach(() => {
        store.clearActions();
    });

    it("should dispatch GET_ALBUM after successful album details call", () => {
        mock.onGet("https://itunes.apple.com/lookup?id=1234&entity=song").reply(
            200,
            {
                res: { data: payload },
            }
        );

        store.dispatch(getAlbumData("1234")).then(() => {
            let expectedActions = [
                { type: SET_ALBUM_LOADING },
                { type: GET_ALBUM, payload },
            ];

            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should dispatch ALBUM_ERROR after unsuccessful album details call", () => {
        mock.onGet("https://itunes.apple.com/lookup?id=1234&entity=song").reply(
            400,
            {
                err: { data: 'Error' },
            }
        );

        store.dispatch(getAlbumData("1234")).then(() => {
            let expectedActions = [
                { type: SET_ALBUM_LOADING },
                { type: ALBUM_ERROR },
            ];

            expect(store.getActions()).toEqual(expectedActions);
        });
    });

});
