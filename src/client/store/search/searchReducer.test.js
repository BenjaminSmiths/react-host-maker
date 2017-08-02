import searchReducer from './searchReducer';
import { Reducer } from 'redux-testkit';
import * as types from './searchActionTypes';
import Immutable from 'seamless-immutable';


const initialState = {
    formattedAddress: '',
    lat: 0,
    lng: 0
};

describe('SearchReducer', () => {
    it('should have initial state', () => {
        expect(searchReducer()).toEqual(initialState);
    });

    it('should not affect state with unknown type', () => {
        Reducer(searchReducer).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    });

    it('should store fetched search', () => {
        const search = {formatedAddress: 'somewhere hot', lat: 123, lng: 321};
        const action = {type: types.SEARCH_GOOGLE_SUCCESS, search};
        Reducer(searchReducer).expect(action).toReturnState(search);
    });
});