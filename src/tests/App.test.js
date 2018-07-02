import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByClassName } from '../utils/TestUtils';
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without crashing', () =>
{
    const wrapper = shallow(<App/>);

    const app = findByClassName(wrapper, '.src-app--container');

    expect(app.length).toBe(1);
});