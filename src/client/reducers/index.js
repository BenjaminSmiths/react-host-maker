import {combineReducers} from 'redux';
import properties from './propertiesReducer';

const rootReducer = combineReducers({
    properties
});

export default rootReducer;