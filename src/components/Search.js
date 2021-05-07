import "../styles/main.scss";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ loadData }) => {
    const [userInput, setUserInput] = useState("");

    const onSearchSubmit = (e) => {
        e.preventDefault();
        
        loadData(userInput);
    };

    return (
        <form onSubmit={onSearchSubmit} className="searchForm">
            <input
                className="searchForm__input"
                type="text"
                placeholder="Search for an artist or album..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button title="submitBTN" className="searchForm__submit" type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    );
};

export default Search;
