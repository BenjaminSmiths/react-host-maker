import Immutable from 'seamless-immutable';
import * as types from './propertiesActionTypes';

const initialState = Immutable([]);

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case types.PROPERTIES_SUCCESS:
            return [...action.properties];
        default:
            return state;
    }
}
