import React from 'react';
import ReactDOM from 'react-dom';
import PropertyItem from './PropertyItem';
import ReactTestUtils from 'react-dom/test-utils';

describe('PropertyItem', () => {
    let property = {
        'owner': 'carlos',
        'address': {
            'line1': 'Flat 5',
            'line4': '7 Westbourne Terrace',
            'postCode': 'W2 3UL',
            'city': 'London',
            'country': 'U.K.'
        },
        'incomeGenerated': 2000.34,
        'image': 'property1.jpg'
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PropertyItem property={property}/>, div);
    });

    it('should find the owner text', () => {

        let component = ReactTestUtils.renderIntoDocument(
            <PropertyItem property={property}/>
        );

        let owner = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'owner'
        );

        expect(ReactDOM.findDOMNode(owner).textContent).toEqual("carlos");
    });

    it('should find the income amount', () => {

        let component = ReactTestUtils.renderIntoDocument(
            <PropertyItem property={property}/>
        );

        let income = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'income'
        );

        expect(ReactDOM.findDOMNode(income).textContent).toEqual("2000.34");
    });

    it('should find the address amount', () => {

        let component = ReactTestUtils.renderIntoDocument(
            <PropertyItem property={property}/>
        );

        let address = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'address'
        );

        expect(ReactDOM.findDOMNode(address).textContent).toEqual("Flat 57 Westbourne TerraceW2 3ULLondonU.K.");
    });
});