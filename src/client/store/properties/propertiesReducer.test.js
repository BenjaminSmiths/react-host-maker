import propertiesReducer from './propertiesReducer';
import { Reducer } from 'redux-testkit';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = [];

describe('PropertiesReducer', () => {

    it('should have initial state', () => {
        expect(propertiesReducer()).toEqual(initialState);
    });

    it('should not affect state with unknown type', () => {
        Reducer(propertiesReducer).expect({type: 'NOT_EXISTING'}).toReturnState(initialState);
    });

    it('should store fetched properties', () => {
        const properties = [{owner: 'isme'}, {owner: 'isyou'}];
        const action = {type: types.PROPERTIES_SUCCESS, properties};
        Reducer(propertiesReducer).expect(action).toReturnState(properties);
    });

    it('should store fetched properties and override existing properties', () => {
        const existingState = Immutable({...initialState, properties: {owner: 'its not me'}});
        const properties = [{owner: 'isme'}, {owner: 'isyou'}];
        const action = {type: types.PROPERTIES_SUCCESS, properties};
        Reducer(propertiesReducer).withState(existingState).expect(action).toReturnState(properties);
    });

});