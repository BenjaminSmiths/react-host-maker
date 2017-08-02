import * as types from './propertiesActionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable([]);

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case types.PROPERTIES_SUCCESS:
            return [...action.properties];
        default:
            return state;
    }
}
