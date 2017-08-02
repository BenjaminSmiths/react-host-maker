import { Thunk } from 'redux-testkit';
import * as types from './searchActionTypes';
import * as uut from './searchActions';


describe('store/search/actions', () => {

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should return a search result', async () => {
        // Given
        let exprectedResult = {
            "results" : [
                {
                    "formatted_address" : "London, UK",
                    "geometry" : {
                        "location" : {
                            "lat" : 51.5073509,
                            "lng" : -0.1277583
                        }
                    }
                }
            ],
            "status" : "OK"
        };
        fetch.mockResponse(JSON.stringify(exprectedResult));

        // When
        const dispatches = await Thunk(uut.searchGoogle).execute();

        // Then
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].isPlainObject()).toBe(true);
        expect(dispatches[0].getAction('London')).toEqual({
            type: types.SEARCH_GOOGLE_SUCCESS,
            location: {"formattedAddress": "London, UK", "lat": 51.5073509, "lng": -0.1277583}
        });
    });

    it('should return error 404', async () => {
        fetch.mockReject();

        const dispatches = await Thunk(uut.searchGoogle).execute();

        expect(dispatches.length).toBe(1);
        expect(dispatches[0].isPlainObject()).toBe(true);
        expect(dispatches[0].getAction()).toEqual({
            type: types.SEARCH_GOOGLE_FAILED,
            error: 'Unknown Error'
        });
    });

    it('should get zero results', async () => {
        // Given
        let exprectedResult = {
            "results" : [],
            "status" : "ZERO_RESULTS"
        };
        fetch.mockResponse(JSON.stringify(exprectedResult));

        // When
        const dispatches = await Thunk(uut.searchGoogle).execute();

        // Then
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].isPlainObject()).toBe(true);
        expect(dispatches[0].getAction('asdfasdfasdfa')).toEqual({
            type: types.SEARCH_GOOGLE_FAILED,
            error: 'ZERO_RESULTS'
        });

    });
});