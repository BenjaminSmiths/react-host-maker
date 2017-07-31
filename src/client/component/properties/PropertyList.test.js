import React from 'react';
import ReactDOM from 'react-dom';
import PropertyList from './PropertyList';
import ReactTestUtils from 'react-dom/test-utils';

describe('PropertyList', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PropertyList />, div);
    });

});