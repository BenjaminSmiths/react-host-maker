import { Thunk } from 'redux-testkit';
import * as types from './propertiesActionTypes';
import * as uut from './propertiesActions';


describe('store/properties/actions', () => {

    const json = [
        {
            owner: 'carlos',
            address: {
                line1: 'Flat 5',
                line4: '7 Westbourne Terrace',
                postCode: 'W2 3UL',
                city: 'London',
                country: 'U.K.'
            },
            incomeGenerated: 2000.34
        },
        {
            owner: 'ankur',
            address: {
                line1: '4',
                line2: 'Tower Mansions',
                line3: 'Off Station road',
                line4: '86-87 Grange Road',
                postCode: 'SE1 3BW',
                city: 'London',
                country: 'U.K.'
            },
            incomeGenerated: 1000
        }
    ];

    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('should return some properties', async () => {
        // Given
        const expected = [
            {
                owner: 'Carlos',
                incomeGenerated: '£2, 000.34',
                address: ['Flat 5','7 Westbourne Terrace', 'London, U.K.', 'W2 3UL']
            },
            {
                owner: 'Ankur',
                incomeGenerated: '£1, 000',
                address: ['4, Tower Mansions','Off Station road', '86-87 Grange Road', 'London, U.K.', 'SE1 3BW']
            }
        ];
        fetch.mockResponse(JSON.stringify(json));

        // When
        const dispatches = await Thunk(uut.fetchProperties).execute();

        // Then
        expect(dispatches.length).toBe(1);
        expect(dispatches[0].isPlainObject()).toBe(true);
        expect(dispatches[0].getAction()).toEqual({ type: types.PROPERTIES_SUCCESS, properties: expected});
    });

    it('should return error 404', async () => {
        fetch.mockReject();

        const dispatches = await Thunk(uut.fetchProperties).execute();

        expect(dispatches.length).toBe(1);
        expect(dispatches[0].isPlainObject()).toBe(true);
        expect(dispatches[0].getAction()).toEqual({
            type: types.PROPERTIES_FAILED,
            error: 'Unknown Error'
        });
    });
});