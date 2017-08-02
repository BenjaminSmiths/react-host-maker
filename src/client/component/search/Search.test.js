import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
jest.mock('react-redux', () => require('react-redux-mock'));
import { __setState } from 'react-redux';

describe('Search', () => {

    beforeEach(() => {
        __setState({
            search: {
                formatedAddress: 'We Live here',
                lat: 321,
                lng: 123,
                serviceable: true
            }
        });
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
    });
});