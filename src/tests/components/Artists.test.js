import Artists from "../../components/Artists";
import { cleanup, fireEvent, render } from "@testing-library/react";

describe("<Artists />", () => {
    const artists = {
        resultCount: 2,
        results: [
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
        ],
    };

    it("Should render one li for each artist", async () => {
        const { findAllByTitle } = render(<Artists artists={artists} />);
        const artistEl = await findAllByTitle("artist");
        expect(artistEl).toHaveLength(2);

    });
});
