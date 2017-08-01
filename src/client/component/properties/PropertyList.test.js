import React from 'react';
import ReactDOM from 'react-dom';
import PropertyList from './PropertyList';
import ReactTestUtils from 'react-dom/test-utils';
jest.mock('react-redux', () => require('react-redux-mock'));
import { __setState } from 'react-redux';

describe('PropertyList', () => {

    it('renders without crashing', () => {
        __setState({
            properties: [],
        });

        const div = document.createElement('div');
        ReactDOM.render(<PropertyList />, div);
    });

});