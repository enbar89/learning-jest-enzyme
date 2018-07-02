import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr, findByClassName } from '../../../utils/TestUtils';
import Jotto from '../Jotto';

Enzyme.configure({ adapter: new EnzymeAdapter() });