import { connect } from "react-redux";

import Albums from "./components/Albums";
import Search from "./components/Search";
import Artists from "./components/Artists";
import Spinner from './components/Helper/Spinner';

import { loadData } from "./redux/actions/search";

import "./styles/main.scss";

const App = ({ search, loadData }) => {
    return (
        <div className="container">
            <Search loadData={loadData} />
            {search.loading && <Spinner size={15} styles={{marginTop: '8rem'}} />}
            {!search.loading && (search.albums.resultCount > 0 || search.artists.resultCount > 0) &&(
                <div className="data-container">
                    <Albums albums={search.albums} />
                    <Artists artists={search.artists} />
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    search: state.searchData,
});

export default connect(mapStateToProps, { loadData })(App);
