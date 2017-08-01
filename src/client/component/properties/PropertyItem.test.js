import React from 'react';
import ReactDOM from 'react-dom';
import PropertyItem from './PropertyItem';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

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

        expect(ReactDOM.findDOMNode(owner).textContent).toEqual('Carlos');
    });

    it('should find the income amount', () => {

        let component = ReactTestUtils.renderIntoDocument(
            <PropertyItem property={property}/>
        );

        let income = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'income'
        );

        expect(ReactDOM.findDOMNode(income).textContent).toEqual('£2, 000.34');
    });

    describe('Format Address', () => {

        it('should find the address block', () => {

            let component = ReactTestUtils.renderIntoDocument(
                <PropertyItem property={property}/>
            );

            let address = ReactTestUtils.findRenderedDOMComponentWithClass(
                component, 'address'
            );

            expect(ReactDOM.findDOMNode(address)).toBeDefined()
        });

        it('should match the property missing line2', () => {
            const component = renderer.create(<PropertyItem property={{
                'owner': 'carlos',
                'address': {
                    'line1': 'Flat 5',
                    'line4': '7 Westbourne Terrace',
                    'postCode': 'W2 3UL',
                    'city': 'London',
                    'country': 'U.K.'
                },
                'incomeGenerated': 2000.34
            }}/>);
            expect(component.toJSON()).toMatchSnapshot();
        });

        it('should match the property with all lines', () => {
            const component = renderer.create(<PropertyItem property={{
                'owner': 'ankur',
                'address': {
                    'line1': '4',
                    'line2': 'Tower Mansions',
                    'line3': 'Off Station road',
                    'line4': '86-87 Grange Road',
                    'postCode': 'SE1 3BW',
                    'city': 'London',
                    'country': 'U.K.'
                },
                'incomeGenerated': 1000
            }}/>);
            expect(component.toJSON()).toMatchSnapshot();
        });

        it('should match the property line3 missing', () => {
            const component = renderer.create(<PropertyItem property={{
                'owner': 'elaine',
                'address': {
                    'line1': '4',
                    'line2': '332b',
                    'line4': 'Goswell Road',
                    'postCode': 'EC1V 7LQ',
                    'city': 'London',
                    'country': 'U.K.'
                },
                'incomeGenerated': 1200
            }}/>);
            expect(component.toJSON()).toMatchSnapshot();
        });

    })
});