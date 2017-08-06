import {combineReducers} from 'redux';
import properties from './properties/propertiesReducer';
import search from './search/searchReducer';

const rootReducer = combineReducers({
    properties,
    search
});

export default rootReducer;
