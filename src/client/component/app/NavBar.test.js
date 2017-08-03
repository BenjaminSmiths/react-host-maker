import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';

describe('NavBar', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavBar />, div);
    });

    it('should contain the HostMaker SVG', () => {
        // Given
        let component = ReactTestUtils.renderIntoDocument(
            <NavBar />
        );

        // When
        let img = ReactTestUtils.findRenderedDOMComponentWithTag(
            component, 'img'
        );

        // Then
        expect(ReactDOM.findDOMNode(img).src).toEqual("http://localhost/logo.svg");
    });


    it('should say welcome', () => {
        // Given
        let component = ReactTestUtils.renderIntoDocument(
            <NavBar />
        );

        // When
        let h2 = ReactTestUtils.findRenderedDOMComponentWithClass(
            component, 'NavHeader'
        );

        // Then
        expect(ReactDOM.findDOMNode(h2).textContent).toEqual("Welcome to HostMaker");
    });

    it('should match the current snap', () => {

        // When
        const tree = renderer.create(
            <NavBar />
        ).toJSON();

        // Then
        expect(tree).toMatchSnapshot()
    });
    //
    describe('Fixed Header on Scroll', () => {

        it('should add the fix class when offset is over 70', () => {
            // Given
            let component = ReactTestUtils.renderIntoDocument(
                <NavBar />
            );

            // When
            window.pageYOffset = 71;
            window.dispatchEvent(new window.UIEvent('scroll'));

            let fixed = ReactTestUtils.findRenderedDOMComponentWithClass(
                component, 'fix'
            );

            // Then
            expect(fixed).toBeDefined();
        });

        it('should add the fix class when offset is over 70', () => {
            // Given
            let component = ReactTestUtils.renderIntoDocument(
                <NavBar />
            );

            // When
            window.pageYOffset = 0;
            window.dispatchEvent(new window.UIEvent('scroll'));

            let fixed;

            try {
                fixed = ReactTestUtils.findRenderedDOMComponentWithClass(
                    component, 'fix'
                );
            } catch(e) {

            }

            // Then
            expect(fixed).toBeUndefined();
        });

    });

});
