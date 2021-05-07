import React from "react";

import { cleanup, fireEvent, render } from "@testing-library/react";

import Search from "../../components/Search";

import configureStore from "redux-mock-store";

const mockStore = configureStore({});

describe("<Search />", () => {
    it("Should submit form", () => {
        
        const onSubmit = jest.fn();
        const { getByTitle } = render(<Search loadData={onSubmit} />);

        fireEvent.click(getByTitle("submitBTN"));
        expect(onSubmit).toHaveBeenCalled();
    });
});
