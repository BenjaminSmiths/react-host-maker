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
});