import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../utils/TestUtils';
import Jotto from '../Jotto';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Jotto component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) =>
{
    return shallow(<Jotto {...props}/>);
};

test('renders without error', () =>
{
    const wrapper = setup();

    const component = findByTestAttr(wrapper, 'component-jotto');

    expect(component.length).toBe(1);
});