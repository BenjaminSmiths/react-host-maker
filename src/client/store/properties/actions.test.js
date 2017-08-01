import { Thunk } from 'redux-testkit';
import * as types from './actionTypes';
import * as uut from './actions';


describe('store/properties/actions', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should return some properties', async () => {
        fetch.mockResponse(JSON.stringify({json: 'something' }));

        const dispatches = await Thunk(uut.fetchProperties).execute();

        expect(dispatches.length).toBe(1);
        expect(dispatches[0].isPlainObject()).toBe(true);
        expect(dispatches[0].getAction()).toEqual({ type: types.PROPERTIES_SUCCESS, properties: {json: 'something' }});
    });
});