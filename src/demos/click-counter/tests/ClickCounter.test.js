import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, findByClassName } from '../../../utils/TestUtils';
import ClickCounter from '../ClickCounter';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create ShallowWrapper for the ClickCounter component.
 * @function
 * @param {object} props - Component props specific to this setup.
 * @param {object} state - Initial state for the setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) =>
{
    const wrapper = shallow(<ClickCounter {...props}/>);

    if(state) wrapper.setState(state);

    return wrapper;
};

describe('ClickCounter is instantiated', () =>
{
    test('renders without error', () =>
    {
        const wrapper = setup();

        const clickCounterComponent = findByTestAttr(wrapper, 'component-click-counter');

        expect(clickCounterComponent.length).toBe(1);
    });

    test('renders increment button', () =>
    {
        const wrapper = setup();

        const button = findByTestAttr(wrapper, 'increment-button');

        expect(button.length).toBe(1);
    });

    test('renders decrement button', () =>
    {
        const wrapper = setup();

        const button = findByTestAttr(wrapper, 'decrement-button');

        expect(button.length).toBe(1);
    });

    test('renders counter display', () =>
    {
        const wrapper = setup();

        const counterDisplay = findByTestAttr(wrapper, 'counter-display');

        expect(counterDisplay.length).toBe(1);
    });

    test('counter starts at 0', () =>
    {
        const wrapper = setup();

        const initialCounterState = wrapper.state('counter');

        expect(initialCounterState).toBe(0);
    });
});

describe('Increment button functionality', () =>
{
    const counter = 0;

    const wrapper = setup(null, { counter });

    const button = findByTestAttr(wrapper, 'increment-button');

    test('clicking button increments counter display and removes error dialogue if present', () =>
    {
        // simulate button click
        button.simulate('click');

        // find display and test value
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter + 1);

        // verify error is no longer rendered
        const error = findByClassName(wrapper, '.demos-click-counter--error-message');
        expect(error.length).toBe(0);
    });
});

describe('Decrement button functionality', () =>
{
    test('clicking decrement button decreases counter display', () =>
    {
        const counter = 5;

        const wrapper = setup(null, { counter });

        // find button and simulate click
        const button = findByTestAttr(wrapper, 'decrement-button');
        button.simulate('click');

        // find display and test value
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(counter - 1);
    });

    test('cannot decrement below 0 or else render error', () =>
    {
        const counter = 0;

        const wrapper = setup(null, { counter });

        //find button and simulate click
        const button = findByTestAttr(wrapper, 'decrement-button');
        button.simulate('click');

        // find display and test value
        const counterDisplay = findByTestAttr(wrapper, 'counter-display');
        expect(counterDisplay.text()).toContain(0);

        // verify error is rendered
        const error = findByClassName(wrapper, '.demos-click-counter--error-message');
        expect(error.length).toBe(1);
    });
});