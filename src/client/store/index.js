import {combineReducers} from 'redux';
import properties from './properties/propertiesReducer';

const rootReducer = combineReducers({
    properties
});

export default rootReducer;