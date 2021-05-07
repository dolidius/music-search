import Albums from "../../components/Albums";
import { cleanup, fireEvent, render } from "@testing-library/react";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore({});

describe("<Albums />", () => {
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

    it("Should render one li for each album in store", async () => {
        let store = mockStore({
            searchData: {
                albums: { resultCount: 2, results: albums },
                artists: { resultCount: 2, results: artists },
                loading: false,
            },


            album: {
                loading: false,
                albumDetails: {},
                songs: [],
                error: false,
            },
        });
        const { findAllByTitle, findByTitle } = render(
            <Provider store={store}>
                {" "}
                <Albums albums={{ resultCount: 2, results: albums }} />{" "}
            </Provider>
        );
        const albumsEl = await findAllByTitle("album");

        expect(albumsEl).toHaveLength(2);
    });
});

// album: {
//     loading: false,
//     albumDetails: {
//         collectionId: "1370494122",
//         artworkUrl100:
//             "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/01/29/19/0129190f-1a37-fb80-0518-97261962beb5/source/100x100bb.jpg",
//         artistName: "frytt",
//         collectionName: "Siema - Single",
//         releaseDate: "2002-08-08T07:00:00Z",
//         country: "USA",
//     },
//     songs: [
//         {
//             trackId: "1122776152",
//             trackName: "Politik",
//             artistName: "frytt",
//             collectionId: "1370494122",
//         },
//     ],
//     error: false,
// },
