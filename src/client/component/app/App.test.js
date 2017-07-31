import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import PropertyList from '../properties/PropertyList';

describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('should say welcome', () => {
        let component = ReactTestUtils.renderIntoDocument(
            <App />
        );

        let h2 = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'h2'
        );

        expect(ReactDOM.findDOMNode(h2).textContent).toEqual("Welcome to React");
    });

    it('should match the current snap', () => {
        const tree = renderer.create(
            <App />
        ).toJSON();
        expect(tree).toMatchSnapshot()
    });

    describe('list of properties', () => {

        it('should find a list component', () => {
            let component = ReactTestUtils.renderIntoDocument(
                <App />
            );

            let propertyList = ReactTestUtils.scryRenderedComponentsWithType(
                component, 'PropertyList'
            );

            expect(propertyList).toBeDefined();
        });
    })

});
