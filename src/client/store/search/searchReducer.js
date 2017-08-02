import * as types from './searchActionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
    formattedAddress: '',
    lat: 0,
    lng: 0
});

const searchReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.SEARCH_GOOGLE_SUCCESS:
            return {...action.search};
        case types.SEARCH_GOOGLE_FAILED:
            return {...{error: action.error}};
        default:
            return state;
    }
};

export default searchReducer;