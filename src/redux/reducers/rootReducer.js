import { combineReducers } from "redux";

import searchReducer from '../reducers/search';
import albumReducer from '../reducers/album';

const rootReducer = combineReducers({
    searchData: searchReducer,
    album: albumReducer
});

export default rootReducer;