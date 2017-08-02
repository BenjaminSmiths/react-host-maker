import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import PropertyList from '../properties/PropertyList';
jest.mock('react-redux', () => require('react-redux-mock'));
import {__setState} from 'react-redux';

describe('App', () => {

    let property = {
        'owner': 'Carlos',
        'address': ['Flat 5', '7 Westbourne Terrace', 'London, U.K.', 'W2 3UL'],
        'incomeGenerated': '£2, 000.34'
    };

    beforeEach(() => {
        __setState({
            properties: [property],
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
        ReactDOM.render(<App />, div);
    });

    it('should say welcome', () => {
        // Given
        let component = ReactTestUtils.renderIntoDocument(
            <App />
        );

        // When
        let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'h2'
        );

        // Then
        expect(ReactDOM.findDOMNode(h2).textContent).toEqual("Welcome to HostMaker");
    });

    it('should match the current snap', () => {

        // When
        const tree = renderer.create(
            <App />
        ).toJSON();

        // Then
        expect(tree).toMatchSnapshot()
    });

    describe('list of properties', () => {

        it('should find a list component', () => {
            // Given
            let component = ReactTestUtils.renderIntoDocument(
                <App />
            );

            // When
            let propertyList = ReactTestUtils.scryRenderedComponentsWithType(
                component, 'PropertyList'
            );

            // Then
            expect(propertyList).toBeDefined();
        });
    })

});
