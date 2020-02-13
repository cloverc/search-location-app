import React from 'react';
import { mount } from 'enzyme';

import PlaceType from '../src/components/PlaceType';

const mockProps = {
  placetype: 'C',
};

it('displays correct place type name', () => {
  const wrapper = mount(<PlaceType {...mockProps} />);
  expect(
    wrapper
      .find('.c-fts-results__pill-container'))
      .toHaveLength(1)
});
