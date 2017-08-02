import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

describe('Search', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
    });
});