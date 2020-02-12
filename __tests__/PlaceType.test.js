import React from 'react';
import { mount } from 'enzyme';

import PlaceType from '../src/components/PlaceType';

const mockProps = {
  placetype: 'foo',
};

const render = (props = mockProps) => mount(<PlaceType {...props} />);

it('displays correct place type name', () => {
  //   const wrapper = mount(<PlaceType {...mockProps} />);
  console.log(render().debug());
  //   expect(wrapper.find('.c-fts-results__pill-container').text()).toEqual('City');
  expect(
    render()
      .find('.c-fts-results__pill-container')
      .text(),
  ).toEqual('City');
});
