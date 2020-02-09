import React from 'react';
import { shallow } from 'enzyme';
import Form from '../src/components/Form';

it('renders the h1 correctly', () => {
  const wrapper = shallow(<Form />);

  //expect(wrapper.find(Form).exists()).toEqual(true);
  expect(wrapper.find("h1").text()).toEqual("Let's find your ideal car")
});
