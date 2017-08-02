import React from 'react';
import ReactDOM from 'react-dom';
import PropertyItem from './PropertyItem';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

describe('PropertyItem', () => {
    let property = {
        'owner': 'Carlos',
        'address': ['Flat 5', '7 Westbourne Terrace','London, U.K.','W2 3UL'],
        'incomeGenerated': '£2, 000.34'
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PropertyItem property={property}/>, div);
    });

});