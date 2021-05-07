import React from "react";

import renderer from "react-test-renderer";

import App from "../../App";
import Albums from "../../components/Albums";
import Artists from "../../components/Artists";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore({});

describe("<App />", () => {
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

    it("Should renders search bar correctly with initialState", () => {
        let store = mockStore({
            searchData: {
                albums: {},
                artists: {},
                loading: false,
            },

            album: {
                loading: false,
                albumDetails: {},
                songs: [],
                error: false,
            },
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
    it("Should renders search bar and data with only albums", () => {
        let store = mockStore({
            searchData: {
                albums: {
                    resultCount: 2,
                    results: albums,
                },
                artists: { resultCount: 0, results: [] },
                loading: false,
            },

            album: {
                loading: false,
                albumDetails: {},
                songs: [],
                error: false,
            },
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("Should renders search bar and data with only artists", () => {
        let store = mockStore({
            searchData: {
                albums: { resultCount: 0, results: [] },
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

        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("Should renders search bar and data with arists and albums", () => {
        let store = mockStore({
            searchData: {
                albums: { resultCount: 2, results: artists },
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

        const tree = renderer
            .create(
                <Provider store={store}>
                    <App />
                </Provider>
            )
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
